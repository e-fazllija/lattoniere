<template>
  <div class="modal fade" id="kt_modal_add" ref="addCustomerModalRef" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Aggiungi materiale</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div id="kt_modal_add_close" data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary">
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
              data-kt-scroll-dependencies="#kt_modal_add_header"
              data-kt-scroll-wrappers="#kt_modal_add_scroll" data-kt-scroll-offset="300px">
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Codice interno</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Code" type="text" placeholder="Codice interno..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Codice articolo fornitore</span>
                </label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.SupplierArticleCode" type="text" placeholder="Codice articolo fornitore..." />
                <!--begin::Input-->
                <!--end::Input-->
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
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">Descrizione</label>
                <!--end::Label-->
                <textarea class="form-control" v-model="formData.Description" type="text" placeholder="Descrizione..."></textarea>
                <!--begin::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Tipologia materiale</span>
                </label>
                <!--end::Label-->
                <select class="form-select" aria-label="Select example" v-model="formData.MaterialTypeId">
                  <option value="0">Seleziona la tipologia dell'accessorio...</option>
                  <option v-for="item in MaterialTypes" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Fornitore</span>
                </label>
                <!--end::Label-->
                <select class="form-select" aria-label="Select example" v-model="formData.SupplierId">
                  <option value="0">Seleziona il fornitore...</option>
                  <option v-for="item in Suppliers" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">Unità di misura</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.UnitOfMeasure" type="text" placeholder="Unità di misura..." />
              </div>
              <!--end::Input group-->

               <!--begin::Input group-->
               <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">Funzione</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Function" type="text" placeholder="Funzione..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">Prezzo unitario</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.UnitPrice" type="number" placeholder="Prezzo unitario..." />
              </div>
              <!--end::Input group-->


              <!--begin::Billing toggle-->
              <div class="fw-bold fs-3 rotate collapsible mb-7" data-bs-toggle="collapse"
                href="#kt_modal_add_billing_info" role="button" aria-expanded="false"
                aria-controls="kt_view_details">
                Informazioni logistiche
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
                  <label class="fs-6 fw-semobold mb-2">Quantità per confezione</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.PackagingQuantity" type="text" placeholder="Quantità per confezione..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Giacenza minima</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.MinimumStock" type="text" placeholder="Giacenza minima..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Tempistiche di consegna</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.DeliveryTiming" type="text" placeholder="Tempistiche di consegna..." />
                </div>
                <!--end::Input group-->

                 <!--begin::Input group-->
                 <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Data ultima consegna</label>
                  <!--end::Label-->
                  <input class="form-control" v-model="formData.LastDeliveryDate" type="date" placeholder="Data ultima consegna..." />
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">
                    <span class="required">Tipologia consegna</span>
                  </label>
                  <!--end::Label-->
                  <select class="form-select" aria-label="Select example" v-model="formData.DeliveryTypeId">
                    <option value="0">Seleziona la modalità di consegna...</option>
                    <option v-for="item in DeliveryTypes" :key="item.id" :value="item.id">{{ item.name }}</option>
                  </select>
                </div>
                <!--end::Input group-->

              </div>
              <!--end::Billing form-->
            </div>
            <!--end::Scroll-->
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
import {getDeliveryTypes} from "@/core/data/typologies/DeliveryTypes";
import type { IDeliveryType } from "@/core/data/typologies/DeliveryTypes";
import {getMaterialTypes} from "@/core/data/typologies/materialTypes";
import type { IMaterialType } from "@/core/data/typologies/materialTypes";
import {getSuppliers} from "@/core/data/suppliers";
import type { ISupplier } from "@/core/data/suppliers";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
interface ICreate {
  Code: string;
  SupplierArticleCode: string;
  Name: string;
  Description?: string;
  UnitOfMeasure?: string;
  Function?: string;
  SupplierId: number;
  Supplier: string;
  UnitPrice?: number;
  PackagingQuantity?: number;
  MinimumStock?: number;
  Quantity?: number;
  DeliveryTiming?: string;
  DeliveryTypeId: number;
  DeliveryType: string;
  MaterialTypeId: number;
  MaterialType: string;
  LastDeliveryDate: Date;
}
export default defineComponent({
  name: "add-material-modal",
  components: {},
  setup(props, { emit }) {
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref<ICreate>({
      Code: "",
      SupplierArticleCode: "",
      Name: "",
      Description: "",
      UnitOfMeasure: "",
      Function: "",
      SupplierId: 0,
      Supplier: "",
      UnitPrice: 0,
      PackagingQuantity: 0,
      MinimumStock: 0,
      Quantity:0,
      DeliveryTiming: "",
      DeliveryTypeId: 0,
      DeliveryType: "",
      MaterialTypeId: 0,
      MaterialType: "",
      LastDeliveryDate: new Date()
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
          message: "Inserire il codice interno",
          trigger: "change",
        },
      ],
    });

    const controller = "Materials"
    let MaterialTypes = ref<IMaterialType[]>([]);
    let Suppliers = ref<ISupplier[]>([]);
    let DeliveryTypes = ref<IDeliveryType[]>([]);

    async function _getTypes() {
      try {
        MaterialTypes.value = await getMaterialTypes("");
        Suppliers.value = await getSuppliers("");
        DeliveryTypes.value = await getDeliveryTypes('');
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

      if(formData.value.MaterialTypeId === 0){
        Swal.fire({
                text: "Attenzione, selezionare la tipologia del materiale.",
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
      if(formData.value.SupplierId === 0){
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
      if(formData.value.DeliveryTypeId === 0){
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
      MaterialTypes,
      Suppliers,
      DeliveryTypes
    };
  },
});
</script>
