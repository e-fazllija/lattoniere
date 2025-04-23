<template>
  <div class="modal fade" id="kt_modal_update_type" ref="updateTypeModal" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_type_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Modifica profilo xml</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div id="kt_modal_type_close" data-bs-dismiss="modal"
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
            <div class="scroll-y me-n7 pe-7" id="kt_modal_type_scroll" data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_type_header"
              data-kt-scroll-wrappers="#kt_modal_type_scroll" data-kt-scroll-offset="300px">
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Nome materiale</label>
                <!--end::Label-->
                <input required class="form-control" v-model="formData.Name" type="text" placeholder="Nome..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="formData.Active" />
                  <label class="form-check-label">
                    Attivato
                  </label>
                </div>
              </div>
              <!--end::Input group-->

            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">

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
import { defineComponent, ref, watch } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
import { boolean } from "yup";

interface IUpdate {
  Id: number,
  Name: string,
  Active: boolean,
}
export default defineComponent({
  name: "update-proflie-xml",
  components: {},
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref<IUpdate>({
      Id: props.id ?? 0,
      Name: props.name ?? "",
      Active: props.active ?? false
    });

    watch(() => [props.id, props.name, props.active], ([newId, newName, newActive]) => {
      formData.value.Id = newId !== undefined ? Number(newId) : 0;
      formData.value.Name = newName !== undefined ? String(newName) : "";
      formData.value.Active = newName !== undefined ? Boolean(newActive) : false;
    });

    const rules = ref({
      Name: [
        {
          required: true,
          message: "Inserire il nome del materiale",
          trigger: "change",
        },
      ]
    });

    const controller = "ProfileXml"
    
    const submit = () => {

      if (!formRef.value) {
        return;
      }

      
      formRef.value.validate((valid: boolean) => {
        if (valid) {
          loading.value = true;
          ApiService.post(`${controller}/Update`, formData.value)
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
                emit('formUpdateSubmitted', formData.value);
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
      getAssetPath
    };
  },
});
</script>
