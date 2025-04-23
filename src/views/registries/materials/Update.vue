<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Dettagli</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->
  </div>
  <!--begin::Content-->
  <div class="collapse show">
    <!--begin::Form-->
    <form class="form" novalidate @submit.prevent="saveChanges()"
      >
      <!--begin::Card body-->
      <div class="card-body border-top p-9">

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Nome</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" name="name" class="form-control form-control-lg " placeholder="Nome" v-model="item.name" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->
        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Codice</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" name="code" class="form-control form-control-lg " placeholder="Codice"
              v-model="item.code" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->
        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Codice articolo fornitore</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" name="supplierArticleCode" class="form-control form-control-lg "
              placeholder="Codice articolo fornitore" v-model="item.supplierArticleCode" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

         <!--begin::Input group-->
         <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Unità di misura</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" name="unitOfMeasure" class="form-control form-control-lg " placeholder="Unità di misura"
              v-model="item.unitOfMeasure" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

         <!--begin::Input group-->
         <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Funzione</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" name="function" class="form-control form-control-lg " placeholder="Funzione"
              v-model="item.function" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

      
        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Tipologia materiale</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <select as="select" name="materialType" class="form-select form-select-lg fw-semobold"
              v-model="item.materialTypeId">
              <option v-for="option in MaterialTypes" :key="option.id" :value="option.id">{{ option.name }}</option>
            </select>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Fornitore</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <select as="select" name="supplier" class="form-select form-select-lg fw-semobold" v-model="item.supplierId">
              <option v-for="option in Suppliers" :key="option.id" :value="option.id">{{ option.name }}</option>
            </select>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

         <!--begin::Input group-->
         <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Modalità di consegna</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <select as="select" name="deliveryType" class="form-select form-select-lg fw-semobold"
              v-model="item.deliveryTypeId">
              <option v-for="option in DeliveryTypes" :key="option.id" :value="option.id">{{ option.name }}</option>
            </select>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">
            <span>Descrizione</span>
          </label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <textarea name="description" class="form-control form-control-lg " v-model="item.description"></textarea>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Prezzo unitario</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="number" name="unitPrice" class="form-control form-control-lg " placeholder="Prezzo unitario"
              v-model="item.unitPrice" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Quantità per confezione</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="number" name="packagingQuantity" class="form-control form-control-lg " placeholder="Quantità per confezione"
              v-model="item.packagingQuantity" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Giacenza minima</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="number" name="minimumStock" class="form-control form-control-lg " placeholder="Giacenza minima"
              v-model="item.minimumStock" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Tempistiche di consegna</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" name="deliveryTiming" class="form-control form-control-lg "
              placeholder="Tempistiche di consegna" v-model="item.deliveryTiming" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

         <!--begin::Input group-->
         <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Data ultima consegna</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="date" name="lastDeliveryDate" class="form-control form-control-lg "
              placeholder="Data ultima consegna" v-model="item.lastDeliveryDate" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->
       

      </div>
      <!--begin::Actions-->
      <div class="card-footer d-flex justify-content-end py-6 px-9">
        <button type="button" @click="deleteItem()" class="btn btn-danger btn-active-light-primary me-2">
          Elimina
        </button>

        <!--begin::Button-->
        <button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg btn-primary" type="submit">
            <span v-if="!loading" class="indicator-label">
              Salva modifiche
            </span>
            <span v-if="loading" class="indicator-progress">
              Attendere...
              <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
        </button>
        <!--end::Button-->
      </div>
      <!--end::Actions-->
    </form>
    <!--end::Form-->
  </div>
  <!--end::Content-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";
import CreditBalance from "@/components/customers/cards/overview/CreditBalance.vue";
import Invoices from "@/components/customers/cards/overview/Invoices.vue";

import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import Logs from "@/components/customers/cards/events-and-logs/Logs.vue";

import Earnings from "@/components/customers/cards/statments/Earnings.vue";
import Statement from "@/components/customers/cards/statments/Statement.vue";

import { useRoute, useRouter } from "vue-router";
import { getMaterial, emptyMaterial } from "@/core/data/materials";
import type { IMaterial } from "@/core/data/materials";
import {getDeliveryTypes} from "@/core/data/typologies/DeliveryTypes";
import type { IDeliveryType } from "@/core/data/typologies/DeliveryTypes";
import {getMaterialTypes} from "@/core/data/typologies/materialTypes";
import type { IMaterialType } from "@/core/data/typologies/materialTypes";
import {getSuppliers} from "@/core/data/suppliers";
import type { ISupplier } from "@/core/data/suppliers";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "customer-details",
  components: {
    PaymentRecords,
    PaymentMethods,
    CreditBalance,
    Invoices,
    Events,
    Logs,
    Earnings,
    Statement,
    Dropdown3,
    NewCardModal,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    let loading = ref<boolean>(true);

    const item = ref<IMaterial>(emptyMaterial);

    let MaterialTypes = ref<IMaterialType[]>([]);
    let Suppliers = ref<ISupplier[]>([]);
    let DeliveryTypes = ref<IDeliveryType[]>([]);

    async function getItem() {
      MaterialTypes.value = await getMaterialTypes("");
      Suppliers.value = await getSuppliers("");
      DeliveryTypes.value = await getDeliveryTypes("");

      const material = await getMaterial(id);
      item.value = material || emptyMaterial;
      loading.value = false;
    };

    onMounted(() => {
      loading.value = true;
      getItem();
    });

    const saveChanges = () => {
        loading.value = true;
       
        ApiService.post(`Materials/Update`, item.value)
          .then(() => {
            
              loading.value = false;

              Swal.fire({
                text: "Operazione completata!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Continua!",
                heightAuto: false,
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              }) 
              
              router.push({ name: 'materials-list' })
          })
          .catch(({ response }) => {
            console.log(response);
            loading.value = false;
            Swal.fire({
              text: "Attenzione, si è verificato un errore.",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Continua!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
          });
    };

    const deleteItem = () => {
      loading.value = true;
      ApiService.post(`Materials/Delete?id=${id}`, {})
        .then(() => {
          
              loading.value = false;

              Swal.fire({
                text: "Operazione completata!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Continua!",
                heightAuto: false,
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              })
              
          router.push({ name: 'materials-list' })
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };

    return {
      getAssetPath,
      item,
      saveChanges,
      MaterialTypes,
      Suppliers,
      DeliveryTypes,
      deleteItem,
      loading
    };
  },
});
</script>
  