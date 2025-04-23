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
            <label class="col-lg-4 col-form-label required fw-semobold fs-6">Codice univoco</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="uniqueCode" class="form-control form-control-lg " placeholder="Codice univoco"
                v-model="item.uniqueCode" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

           <!--begin::Input group-->
           <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semobold fs-6">Indirizzo</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="address" class="form-control form-control-lg " placeholder="Indirizzo"
                v-model="item.address" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Codice postale</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="zipCode" class="form-control form-control-lg " placeholder="Codice postale"
                v-model="item.zipCode" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Città</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="city" class="form-control form-control-lg " placeholder="Città"
                v-model="item.city" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

           <!--begin::Input group-->
           <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Nazione</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="country" class="form-control form-control-lg " placeholder="Nazione"
                v-model="item.country" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Provincia</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="province" class="form-control form-control-lg " placeholder="Provincia"
                v-model="item.province" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

           <!--begin::Input group-->
           <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">P. IVA</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="vatNumber" class="form-control form-control-lg " placeholder="P. IVA"
                v-model="item.vatNumber" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Codice fiscale</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="fiscalCode" class="form-control form-control-lg " placeholder="Codice fiscale"
                v-model="item.fiscalCode" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

           <!--begin::Input group-->
           <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Referente</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="contactPerson" class="form-control form-control-lg " placeholder="Referente"
                v-model="item.contactPerson" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Telefono</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="number" name="phone" class="form-control form-control-lg " placeholder="Telefono"
                v-model="item.phone" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Cellulare</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="number" name="mobile" class="form-control form-control-lg " placeholder="Cellulare"
                v-model="item.mobile" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Email</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="email" name="email" class="form-control form-control-lg " placeholder="Email"
                v-model="item.email" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">PEC</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="pec" class="form-control form-control-lg " placeholder="PEC"
                v-model="item.pec" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">FAX</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="fax" class="form-control form-control-lg " placeholder="FAX"
                v-model="item.fax" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Agente di riferimento</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="referenceAgent" class="form-control form-control-lg " placeholder="Agente di riferimento"
                v-model="item.referenceAgent" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semobold fs-6">Metodo di pagamento</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <select as="select" name="paymentType" class="form-select form-select-lg fw-semobold" v-model="item.paymentTypeId">
                <option v-for="option in PaymentTypes" :key="option.id" :value="option.id">{{ option.name }}</option>
              </select>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Coordinate bancarie</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="bankDetails" class="form-control form-control-lg " placeholder="Coordinate bancarie"
                v-model="item.bankDetails" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Note</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="notes" class="form-control form-control-lg " placeholder="Note"
                v-model="item.notes" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

           <!--begin::Input group-->
           <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semobold fs-6">Note</label>
            <!--end::Label-->
  
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="text" name="notes" class="form-control form-control-lg " placeholder="Note"
                v-model="item.notes" />
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
  import { getSupplier, type ISupplier } from "@/core/data/suppliers";
  import { getPaymentTypes } from "@/core/data/typologies/paymentTypes";
  import type { IPaymentType } from "@/core/data/typologies/paymentTypes";
  import ApiService from "@/core/services/ApiService";
  import Swal from "sweetalert2/dist/sweetalert2.js";
  const emptySupplier: ISupplier = {
  id: 0,
  name: '',
  code: '',
  uniqueCode: '',
  address: '',
  zipCode: '',
  city: '',
  country: '',
  province: '',
  vatNumber: '',
  fiscalCode: '',
  contactPerson: '',
  phone: 0,
  mobile: 0,
  email: '',
  pec: '',
  fax: '',
  referenceAgent: '',
  paymentTypeId: 0,
  bankDetails: '',
  notes: '',
  paymentType: {
    id: 0,
    name: ''
  }
};
  export default defineComponent({
    name: "supplier-details",
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
  
      const item = ref<ISupplier>(emptySupplier);
  
      let PaymentTypes = ref<IPaymentType[]>([]);
  
      async function getItem() {
        PaymentTypes.value = await getPaymentTypes("");
        const supplier = await getSupplier(id);

        if (supplier) {
            item.value = supplier;
           
            }
        
        loading.value = false;
      };
  
      onMounted(() => {
        loading.value = true;
        getItem();
      });
  
      const saveChanges = () => {
          loading.value = true;
                  
          ApiService.post(`Suppliers/Update`, item.value)
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
                
                router.push({ name: 'suppliers-list' })
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
        ApiService.post(`Suppliers/Delete?id=${id}`, {})
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
                
            router.push({ name: 'suppliers-list' })
          })
          .catch(({ response }) => {
            console.log(response);
          });
      };
  
      return {
        getAssetPath,
        item,
        saveChanges,
        PaymentTypes,
        deleteItem,
        loading
      };
    },
  });
  </script>
    