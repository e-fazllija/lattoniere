<template>
  <div class="modal fade" id="kt_modal_add" ref="addModalRef" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Aggiungi modulo</h2>
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
                <label class="required fs-6 fw-semobold mb-2">Nome modulo</label>
                <!--end::Label-->
                <input required class="form-control" v-model="formData.Name" type="text" placeholder="Nome..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Name xml Opera</label>
                <!--end::Label-->
                <input required class="form-control" v-model="formData.NameXmlOpera" type="text" placeholder="Name xml Opera..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <label class="fs-6 fw-semobold mb-2">DX</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Dx" type="text" placeholder="DX..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row mb-7">
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Arrotondamento per difetto</label>
                  <!--end::Label-->
                  <input class="form-check-input ms-2" v-model="formData.RoundDx" type="checkbox" />
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Arrotondamento per eccesso</label>
                  <!--end::Label-->
                  <input class="form-check-input ms-2" v-model="formData.CeilDx" type="checkbox" />
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <label class="fs-6 fw-semobold mb-2">DA</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Da" type="text" placeholder="DA..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row mb-7">
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Arrotondamento per difetto</label>
                  <!--end::Label-->
                  <input class="form-check-input ms-2" v-model="formData.RoundDa" type="checkbox" />
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Arrotondamento per eccesso</label>
                  <!--end::Label-->
                  <input class="form-check-input ms-2" v-model="formData.CeilDa" type="checkbox" />
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <label class="fs-6 fw-semobold mb-2">NRip</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.NRip" type="text" placeholder="NRip..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row mb-7">
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Arrotondamento per difetto</label>
                  <!--end::Label-->
                  <input class="form-check-input ms-2" v-model="formData.RoundNRip" type="checkbox" />
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Arrotondamento per eccesso</label>
                  <!--end::Label-->
                  <input class="form-check-input ms-2" v-model="formData.CeilNRip" type="checkbox" />
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <label class="fs-6 fw-semobold mb-2">DxRip</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.DxRip" type="text" placeholder="DxRip..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row mb-7">
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Arrotondamento per difetto</label>
                  <!--end::Label-->
                  <input class="form-check-input ms-2" v-model="formData.RoundDxRip" type="checkbox" />
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Arrotondamento per eccesso</label>
                  <!--end::Label-->
                  <input class="form-check-input ms-2" v-model="formData.CeilDxRip" type="checkbox" />
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="formData.ByRange" />
                  <label class="form-check-label">
                    Controllo sul range
                  </label>
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div v-if="formData.ByRange" class="row mb-7">
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Da</label>
                  <!--end::Label-->
                  <input required class="form-control ms-2" v-model="formData.From" type="number" />
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">A</label>
                  <!--end::Label-->
                  <input required class="form-control ms-2" v-model="formData.To" type="number" />
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="formData.ByCustomer" />
                  <label class="form-check-label">
                    Controllo sul cliente
                  </label>
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div v-if="formData.ByCustomer" class="fv-row mb-7">
                <!--end::Label-->
                <input required class="form-control" v-model="formData.Customer" type="text" placeholder="Nome cliente..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="formData.ByMaterial" />
                  <label class="form-check-label">
                    Controllo sul materiale
                  </label>
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div v-if="formData.ByMaterial" class="fv-row mb-7">
                <!--end::Label-->
                <input required class="form-control" v-model="formData.MaterialName" type="text" placeholder="Nome materiale..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="formData.ByMaterialColor" />
                  <label class="form-check-label">
                    Controllo sul colore del materiale
                  </label>
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div v-if="formData.ByMaterialColor" class="fv-row mb-7">
                <!--end::Label-->
                <input required class="form-control" v-model="formData.MaterialColor" type="text"
                  placeholder="Colore materiale..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7 justify-content-center">
                <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="formData.ByModel" />
                  <label class="form-check-label">
                    Controllo sul modello della grata
                  </label>
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div v-if="formData.ByModel" class="fv-row mb-7">
                <!--end::Label-->
                <input required class="form-control" v-model="formData.Model" type="text" placeholder="Modello grata..." />
              </div>
              <!--end::Input group-->

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
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
interface ICreate {
  Customer?: string;
  MaterialName?: string;
  NameXmlOpera?: string;
  Name?: string;
  Dx: string;
  Da: string;
  NRip: string;
  DxRip: string;
  RoundDx: boolean;
  CeilDx: boolean;
  RoundDa: boolean;
  CeilDa: boolean;
  RoundNRip: boolean;
  CeilNRip: boolean;
  RoundDxRip: boolean;
  CeilDxRip: boolean;
  DeltaX?: string;
  AvanzamentoDeltaX?: string;
  LoopCutIdCode: boolean;
  ByCustomer: boolean;
  ByMaterial: boolean;
  CutNameStart?: string;
  CutNameEnd?: string;
  From?: string;
  To?: string;
  ByRange: boolean;
  MaterialColor?: string;
  ByMaterialColor: boolean;
  Model?: string;
  ByModel: boolean;
}
export default defineComponent({
  name: "add-module-xml-modal",
  components: {},
  setup(props, { emit }) {
    const formRef = ref<null | HTMLFormElement>(null);
    const addModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref<ICreate>({
      Customer: "",
      MaterialName: "",
      NameXmlOpera: "",
      Name: "",
      Dx: "0",
      Da: "0",
      NRip: "0",
      DxRip: "0",
      RoundDx: false,
      CeilDx: false,
      RoundDa: false,
      CeilDa: false,
      RoundNRip: false,
      CeilNRip: false,
      RoundDxRip: false,
      CeilDxRip: false,
      DeltaX: "",
      AvanzamentoDeltaX: "",
      LoopCutIdCode: false,
      ByCustomer: false,
      ByMaterial: false,
      CutNameStart: "",
      CutNameEnd: "",
      From: "",
      To: "",
      ByRange: false,
      MaterialColor: "",
      ByMaterialColor: false,
      Model: "",
      ByModel: false,
    });

    const rules = ref({
      Name: [
        {
          required: true,
          message: "Inserire il nome",
          trigger: "change",
        },
      ],
      NameXmlOpera: [
        {
          required: true,
          message: "Inserire il nome presente nell'xml di opera",
          trigger: "change",
        },
      ]
    });

    const controller = "ModuleXml"

    const submit = () => {

      if (!formRef.value) {
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
                hideModal(addModalRef.value);
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
      addModalRef,
      getAssetPath
    };
  },
});
</script>
