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
            <label class="col-lg-4 col-form-label required fw-semobold fs-6">Numero documento</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="DocumentNumber" class="form-control form-control-lg " placeholder="Nome" v-model="item.documentNumber" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semobold fs-6">Data</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="date" name="date" class="form-control form-control-lg"
                v-model="item.date" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semobold fs-6">Tipologia</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <select as="select" class="form-select form-select-lg fw-semobold"
                v-model="typeId">
                <option value="0">Accessorio</option>
                <option value="1">Profilo</option>
                <option value="2">Materiale</option>
              </select>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semobold fs-6">Lotto</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <select as="select" class="form-select form-select-lg fw-semobold"
                v-model="item.goodId">
                <option v-for="item in GoodsList" :key="item.id" :value="item.id">{{ item.name }}</option>
              </select>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
  
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Quantità</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="number" name="Quantity" class="form-control form-control-lg " placeholder="Quantità"
                v-model="item.quantity" />
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
              <textarea name="note" class="form-control form-control-lg " v-model="item.note"></textarea>
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
  import { defineComponent, onMounted, ref, watch } from "vue";
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
  import { getGoodReceipt, emptyGoodReceipt } from "@/core/data/goodsReceipt";
  import type { IGoodReceipt, IGoodsList } from "@/core/data/goodsReceipt";
  import { getAccessories } from "@/core/data/accessories";
  import type { IAccessory } from "@/core/data/accessories";
  import { getMaterials } from "@/core/data/materials";
  import type { IMaterial } from "@/core/data/materials";
  import { getProfiles } from "@/core/data/profiles";
  import type { IProfile } from "@/core/data/profiles";
  import {getSuppliers} from "@/core/data/suppliers";
  import type { ISupplier } from "@/core/data/suppliers";
  import ApiService from "@/core/services/ApiService";
  import Swal from "sweetalert2/dist/sweetalert2.js";
    
  export default defineComponent({
    name: "good-receipt-details",
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
  
      const item = ref<IGoodReceipt>(emptyGoodReceipt);
  
      let Accessories = ref<IAccessory[]>([]);
      let Materials = ref<IMaterial[]>([]);
      let Profiles = ref<IProfile[]>([]);
      let Suppliers = ref<ISupplier[]>([]);
      let GoodsList = ref<IGoodsList[]>([]);
      let typeId = ref(0);
  
      async function getItem() {
        Suppliers.value = await getSuppliers("");
        const goodReceipt = await getGoodReceipt(id);
        item.value = goodReceipt || emptyGoodReceipt;
        typeId.value = item.value.typeId
        await getStock(item.value.typeId, null);
        loading.value = false;
      };
  
      onMounted(() => {
        loading.value = true;
        getItem();
      });
  
      watch(typeId, async (newTypeId, oldTypeId) => {
        item.value.typeId = newTypeId;
        GoodsList.value = [];
        await getStock(newTypeId, oldTypeId);
      })

      async function getStock(newType, oldType) {
        if (newType == 0 && oldType != 0) {
          Accessories.value = await getAccessories("");
          GoodsList.value = Accessories.value.map(item => ({
            id: item.id,
            name: item.name
          }));
        } else if (newType == 1&& oldType != 1) {
          Profiles.value = await getProfiles("");
          GoodsList.value = Profiles.value.map(item => ({
            id: item.id,
            name: item.name
          }));
        } else if (newType == 2&& oldType != 2) {
          Materials.value = await getMaterials("");
          GoodsList.value = Materials.value.map(item => ({
            id: item.id,
            name: item.name
          }));
        }
      };

      const saveChanges = () => {
          loading.value = true;
          
          if (item.value.supplierId === 0) {
            Swal.fire({
              text: "Attenzione, selezionare il fornitore.",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Continua!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
            return;
          }
          if (item.value.goodId === 0) {
            Swal.fire({
              text: "Attenzione, selezionare il lotto.",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Continua!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
            return;
          }
          item.value.goodName = GoodsList.value.find(option => option.id === item.value.goodId)?.name || "";

          ApiService.post(`GoodReceipt/Update`, item.value)
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
                
                router.push({ name: 'goods-receipt-list' })
            })
            .catch(({ response }) => {
              console.log(response.data.message);
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
        ApiService.post(`GoodReceipt/Delete?id=${id}`, {})
          .then(() => {
            setTimeout(() => {
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
              }, 1000);
            router.push({ name: 'goods-receipt-list' })
          })
          .catch(({ response }) => {
            console.log(response);
          });
      };
  
      return {
        getAssetPath,
        item,
        saveChanges,
        GoodsList,
        typeId,
        Suppliers,
        deleteItem,
        loading
      };
    },
  });
  </script>
    