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
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Prezzo</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="number" name="price" class="form-control form-control-lg " placeholder="Prezzo"
              v-model="item.price" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Tipologia profilo</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <select as="select" name="country" class="form-select form-select-lg fw-semobold"
              v-model="item.profileTypeId">
              <option v-for="option in ProfileTypes" :key="option.id" :value="option.id">{{ option.name }}</option>
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
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Quantità per confezione</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="number" name="packageQuantity" class="form-control form-control-lg "
              placeholder="Quantità per confezione" v-model="item.packageQuantity" />
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
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Tempistiche di consegna</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" name="deliveryTimeframe" class="form-control form-control-lg "
              placeholder="Tempistiche di consegna" v-model="item.deliveryTimeframe" />
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
import { getProfile } from "@/core/data/profiles";
import {getProfileTypes} from "@/core/data/typologies/profileTypes";
import type { IProfileType } from "@/core/data/typologies/profileTypes";
import {getSuppliers} from "@/core/data/suppliers";
import type { ISupplier } from "@/core/data/suppliers";
import {getDeliveryTypes} from "@/core/data/typologies/DeliveryTypes";
import type { IDeliveryType } from "@/core/data/typologies/DeliveryTypes";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";

interface IUpdate {
  id,
  profileType: string,
  profileTypeId: number,
  code: string,
  supplierArticleCode: string,
  name: string,
  description: string,
  unitOfMeasure: string,
  supplier: string,
  supplierId: number,
  price: number,
  packageQuantity: number,
  minimumStock: number,
  quantity: number,
  deliveryTimeframe: string,
  deliveryType: string,
  deliveryTypeId: number
}

export default defineComponent({
  name: "profile-details",
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

    const item = ref<IUpdate>({
      id: 0,
      profileType: "",
      profileTypeId: 0,
      code: "",
      supplierArticleCode: "",
      name: "",
      description: "",
      unitOfMeasure: "",
      supplier: "",
      supplierId: 0,
      price: 0,
      packageQuantity: 0,
      minimumStock: 0,
      deliveryTimeframe: "",
      deliveryType: "",
      deliveryTypeId: 0,
      quantity: 0
    });

    let ProfileTypes = ref<IProfileType[]>([]);
    let Suppliers = ref<ISupplier[]>([]);
    let DeliveryTypes = ref<IDeliveryType[]>([]);

    async function getItem() {
      ProfileTypes.value = await getProfileTypes("");
      Suppliers.value = await getSuppliers("");
      DeliveryTypes.value = await getDeliveryTypes("");

      const profile = await getProfile(id);
      item.value = {
        id: id,
        profileType: profile?.profileType?.name || "",
        profileTypeId: profile?.profileTypeId || 0,
        code: profile?.code || "",
        supplierArticleCode: profile?.supplierArticleCode || "",
        name: profile?.name || "",
        description: profile?.description || "",
        unitOfMeasure: profile?.unitOfMeasure || "",
        supplier: profile?.supplier?.name || "",
        supplierId: profile?.supplierId || 0,
        price: profile?.price || 0,
        packageQuantity: profile?.packageQuantity || 0,
        minimumStock: profile?.minimumStock || 0,
        deliveryTimeframe: profile?.deliveryTimeframe || "",
        deliveryType: profile?.deliveryType?.name || "",
        deliveryTypeId: profile?.deliveryTypeId || 0,
        quantity: profile?.quantity || 0
      }
      loading.value = false;
    };

    onMounted(() => {
      loading.value = true;
      getItem();
    });

    const saveChanges = () => {
        loading.value = true;
      
        ApiService.post(`Profiles/Update`, item.value)
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
              
              router.push({ name: 'profiles-list' })
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
      ApiService.post(`Profiles/Delete?id=${id}`, {})
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
              
          router.push({ name: 'profiles-list' })
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };

    return {
      getAssetPath,
      item,
      saveChanges,
      ProfileTypes,
      Suppliers,
      DeliveryTypes,
      deleteItem,
      loading
    };
  },
});
</script>
  