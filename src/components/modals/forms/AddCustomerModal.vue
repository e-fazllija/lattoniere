<template>
  <div class="modal fade" id="kt_modal_add" ref="addCustomerModalRef" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Aggiungi cliente</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div id="kt_modal_add_close" data-bs-dismiss="modal" class="btn btn-icon btn-sm btn-active-icon-primary">
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form @submit.prevent="submit()" :model="formData" :rules="rules" ref="formRef">
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div class="scroll-y me-n7 pe-7" id="kt_modal_add_scroll" data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_header" data-kt-scroll-wrappers="#kt_modal_add_scroll"
              data-kt-scroll-offset="300px">
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Codice</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Code" type="text" placeholder="Codice..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Nome</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Name" type="text" placeholder="Nome..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Tipologia cliente</span>
                </label>
                <!--end::Label-->
                <select class="form-select" aria-label="Select example" v-model="formData.CustomerTypeId">
                  <option value="0">Seleziona la tipologia cliente...</option>
                  <option v-for="item in CustomerTypes" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Modalità di pagamento</span>
                </label>
                <!--end::Label-->
                <select class="form-select" aria-label="Select example" v-model="formData.PaymentTypeId">
                  <option value="0">Seleziona la modalità di pagamento...</option>
                  <option v-for="item in PaymentTypes" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Modalità di consegna</span>
                </label>
                <!--end::Label-->
                <select class="form-select" aria-label="Select example" v-model="formData.DeliveryTypeId">
                  <option value="0">Seleziona la modalità di consegna...</option>
                  <option v-for="item in DeliveryTypes" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">Indirizzo</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Address" type="text" placeholder="Indirizzo..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">CAP</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.ZipCode" type="text" placeholder="CAP..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">Città</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.City" type="text" placeholder="Città..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">Nazione</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Country" type="text" placeholder="Nazione..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">Provincia</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Province" type="text" placeholder="Provincia..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">Note</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Notes" type="text" placeholder="Note..." />
              </div>
              <!--end::Input group-->

              <!--begin::Billing toggle-->
              <div class="fw-bold fs-3 rotate collapsible mb-7" data-bs-toggle="collapse"
                href="#kt_modal_add_billing_info" role="button" aria-expanded="false" aria-controls="kt_view_details">
                Informazioni sede amministrativa
                <span class="ms-2 rotate-180">
                  <KTIcon icon-name="down" icon-class="fs-3" />
                </span>
              </div>
              <!--end::Billing toggle-->

              <!--begin::Billing form-->
              <div id="kt_modal_add_billing_info" class="collapse show">
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Indirizzo sede amministativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.AdministrativeOfficeAddress" type="text"
                    placeholder="Indirizzo sede amministativa..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Cap sede amministativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.AdministrativeOfficeZipCode" type="text"
                    placeholder="Cap sede amministativa..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Città sede amministativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.AdministrativeOfficeCity" type="text"
                    placeholder="Città sede amministativa..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Nazione sede amministativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.AdministrativeOfficeCountry" type="text"
                    placeholder="Nazione sede amministativa..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Provincia sede amministativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.AdministrativeOfficeProvince" type="text"
                    placeholder="Provincia sede amministativa..." />
                </div>
                <!--end::Input group-->

              </div>
              <!--end::Billing form-->

              <!--begin::Billing toggle-->
              <div class="fw-bold fs-3 rotate collapsible mb-7" data-bs-toggle="collapse"
                href="#kt_modal_add_operating_info" role="button" aria-expanded="false" aria-controls="kt_view_details">
                Informazioni sede operativa
                <span class="ms-2 rotate-180">
                  <KTIcon icon-name="down" icon-class="fs-3" />
                </span>
              </div>
              <!--end::Billing toggle-->

              <!--begin::Billing form-->
              <div id="kt_modal_add_operating_info" class="collapse show">
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Indirizzo sede operativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.OperatingOfficeAddress" type="text"
                    placeholder="Indirizzo sede operativa..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Cap sede operativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.OperatingOfficeZipCode" type="text"
                    placeholder="Cap sede operativa..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Città sede operativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.OperatingOfficeCity" type="text"
                    placeholder="Città sede amministativa..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Nazione sede operativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.OperatingOfficeCountry" type="text"
                    placeholder="Nazione sede amministativa..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Provincia sede operativa</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.OperatingOfficeProvince" type="text"
                    placeholder="Provincia sede amministativa..." />
                </div>
                <!--end::Input group-->

              </div>
              <!--end::Billing form-->
              <!--end::Billing form-->

              <!--begin::Billing toggle-->
              <div class="fw-bold fs-3 rotate collapsible mb-7" data-bs-toggle="collapse"
                href="#kt_modal_add_agency_info" role="button" aria-expanded="false" aria-controls="kt_view_details">
                Informazioni aziendali
                <span class="ms-2 rotate-180">
                  <KTIcon icon-name="down" icon-class="fs-3" />
                </span>
              </div>
              <!--end::Billing toggle-->

              <!--begin::Billing form-->
              <div id="kt_modal_add_agency_info" class="collapse show">
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">P. IVA</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.VATNumber" type="text" placeholder="P. IVA..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Codice ficale</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.FiscalCode" type="text"
                    placeholder="Codice ficale..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Referente</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.ContactPerson" type="text" placeholder="Referente..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Telefono</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.Phone" type="text" placeholder="Telefono..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Cellulare</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.Mobile" type="text" placeholder="Cellulare..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Email</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.Email" type="text" placeholder="Email..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">PEC</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.PEC" type="text" placeholder="PEC..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Codice univoco</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.UniqueCode" type="text"
                    placeholder="Codice univoco..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Agente di riferimento</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.ReferenceAgent" type="text"
                    placeholder="Agente di riferimento..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Coordinate bancarie</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.BankCoordinates" type="text"
                    placeholder="Coordinate bancarie..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Fax</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.Fax" type="text" placeholder="Fax..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Banca</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.Bank" type="text" placeholder="Banca..." />
                </div>
                <!--end::Input group-->

              </div>
              <!--end::Billing form-->

            </div>

          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button type="reset" id="kt_modal_add_cancel" class="btn btn-light me-3">
              Scarta
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg btn-primary" type="submit">
              <span v-if="!loading" class="indicator-label">
                Invia
                <KTIcon icon-name="arrow-right" icon-class="fs-2 me-2 me-0" />
              </span>
              <span v-if="loading" class="indicator-progress">
                Attendere...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { getCustomerTypes } from "@/core/data/typologies/customerTypes";
import type { ICustomerType } from "@/core/data/typologies/customerTypes";
import { getDeliveryTypes } from "@/core/data/typologies/DeliveryTypes";
import type { IDeliveryType } from "@/core/data/typologies/DeliveryTypes";
import { getPaymentTypes } from "@/core/data/typologies/paymentTypes";
import type { IPaymentType } from "@/core/data/typologies/paymentTypes";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";

interface ICreate {
  Address: String,
  ZipCode: String,
  City: String,
  Country: String,
  Province: String,
  AdministrativeOfficeAddress: String,
  AdministrativeOfficeZipCode: String,
  AdministrativeOfficeCity: String,
  AdministrativeOfficeCountry: String,
  AdministrativeOfficeProvince: String,
  OperatingOfficeAddress: String,
  OperatingOfficeZipCode: String,
  OperatingOfficeCity: String,
  OperatingOfficeCountry: String,
  OperatingOfficeProvince: String,
  VATNumber: String,
  FiscalCode: String,
  ContactPerson: String,
  Phone: String,
  Mobile: String,
  Email: String,
  PEC: String,
  UniqueCode: String,
  ReferenceAgent: String,
  PaymentTypeId: Number,
  PaymentType: String,
  BankCoordinates: String,
  Notes: String,
  Fax: String,
  Bank: String,
  Status: String,
  DeliveryTypeId: Number,
  DeliveryType: String,
  CustomerType: String,
  CustomerTypeId: Number,
  Code: String,
  Name: String
}
export default defineComponent({
  name: "add-customer-modal",
  components: {},
  setup(props, { emit }) {
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref<ICreate>({
      Address: "",
      ZipCode: "",
      City: "",
      Country: "",
      Province: "",
      AdministrativeOfficeAddress: "",
      AdministrativeOfficeZipCode: "",
      AdministrativeOfficeCity: "",
      AdministrativeOfficeCountry: "",
      AdministrativeOfficeProvince: "",
      OperatingOfficeAddress: "",
      OperatingOfficeZipCode: "",
      OperatingOfficeCity: "",
      OperatingOfficeCountry: "",
      OperatingOfficeProvince: "",
      VATNumber: "",
      FiscalCode: "",
      ContactPerson: "",
      Phone: "",
      Mobile: "",
      Email: "",
      PEC: "",
      UniqueCode: "",
      ReferenceAgent: "",
      PaymentTypeId: 0,
      PaymentType: "",
      BankCoordinates: "",
      Notes: "",
      Fax: "",
      Bank: "",
      Status: "",
      DeliveryTypeId: 0,
      DeliveryType: "",
      CustomerType: "",
      CustomerTypeId: 0,
      Code: "",
      Name: ""
    });

    const rules = ref({
      name: [
        {
          required: true,
          message: "Inserire il nome",
          trigger: "change",
        },
      ],
      Code: [
        {
          required: true,
          message: "Inserire il codice",
          trigger: "change",
        },
      ],
      Email: [
        {
          required: true,
          message: "Inserire l'email",
          trigger: "change",
        },
      ]
    });

    const controller = "Customers"
    let CustomerTypes = ref<ICustomerType[]>([]);
    let PaymentTypes = ref<IPaymentType[]>([]);
    let DeliveryTypes = ref<IDeliveryType[]>([]);

    async function _getTypes() {
      try {
        CustomerTypes.value = await getCustomerTypes("");
        DeliveryTypes.value = await getDeliveryTypes('');
        PaymentTypes.value = await getPaymentTypes("");
      } catch (error) {
        console.error(error);
      }
    }

    onMounted(() => {
      _getTypes();
    });

    const submit = () => {
      
      if (!formRef.value) {
        return;
      }

      if (formData.value.CustomerTypeId === 0) {
        Swal.fire({
          text: "Attenzione, selezionare la tipologia di cliente.",
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
      if (formData.value.PaymentTypeId === 0) {
        Swal.fire({
          text: "Attenzione, selezionare il metodo di pagamento.",
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
      if (formData.value.DeliveryTypeId === 0) {
        Swal.fire({
          text: "Attenzione, selezionare il modalità di consegna.",
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
      
      formRef.value.validate((valid: boolean) => {
        if (valid) {
          loading.value = true;
          
          ApiService.post(`${controller}/Create`, formData.value)
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
              }).then(() => {
                hideModal(addCustomerModalRef.value);
              });
              emit('formAddSubmitted', formData.value);
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
        } else {
          loading.value = false;
          Swal.fire({
            text: "Attenzione, non tutti i campi sono corretti.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Continua!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addCustomerModalRef,
      getAssetPath,
      CustomerTypes,
      PaymentTypes,
      DeliveryTypes
    };
  },
});
</script>
