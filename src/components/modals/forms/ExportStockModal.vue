<template>
    <div class="modal fade" id="kt_export_modal" tabindex="-1" aria-hidden="true">
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bold">Export magazzino</h2>
            <!--end::Modal title-->
  
            <!--begin::Close-->
            <div id="kt_export_close" data-bs-dismiss="modal" class="btn btn-icon btn-sm btn-active-icon-primary">
              <KTIcon icon-name="cross" icon-class="fs-1" />
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
  
          <!--begin::Modal body-->
          <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <!--begin::Form-->
            <el-form @submit.prevent="submit()" :model="formData" :rules="rules" ref="formRef">
              <!--begin::Input group-->
              <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="fs-5 fw-semobold form-label mb-5">Seleziona il range da lettera a lettera:</label>
                <!--end::Label-->
  
                <!--begin::Input-->
                <div class="input-group mb-5">
                  <select class="form-select" aria-label="Select example" v-model="formData.fromName">
                    <option v-for="item in alphabet" :key="item.name" :value="item.name">{{ item.name }}</option>
                  </select>
                  <span class="input-group-text">-</span>
                  <select class="form-select" aria-label="Select example" v-model="formData.toName">
                    <option v-for="item in alphabet" :key="item.name" :value="item.name">{{ item.name }}</option>
                  </select>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
  
              <!--begin::Input group-->
              <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="fs-5 fw-semobold form-label mb-5">Seleziona il formato:</label>
                <!--end::Label-->
  
                <select class="form-select" aria-label="Select example" v-model="formData.exportFormat">
                  <option value="excel">Excel</option>
                  <option value="csv">CSV</option>
                </select>
              </div>
              <!--end::Input group-->
  
              <!--begin::Actions-->
              <div class="text-center">
                <button type="reset" id="kt_export_cancel" class="btn btn-light me-3">
                  Scarta
                </button>
  
                <!--begin::Button-->
                <button :data-kt-indicator="loading ? 'on' : null" type="submit" class="btn btn-lg btn-primary">
                  <span v-if="!loading" class="indicator-label">
                    Invia
                    <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" />
                  </span>
                  <span v-if="loading" class="indicator-progress">
                    Attendere...
                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                </button>
                <!--end::Button-->
              </div>
              <!--end::Actions-->
            </el-form>
            <!--end::Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
  </template>
  
  <style lang="scss">
  .el-date-editor--daterange.el-input__inner {
    width: 100%;
  }
  </style>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent, ref } from "vue";
  import Swal from "sweetalert2/dist/sweetalert2.js";
  import { alphabet } from "@/core/data/alphabet";
  import ApiService from "@/core/services/ApiService";
  
  export default defineComponent({
    name: "export-stock-modal",
    components: {},
    setup() {
      const formRef = ref<null | HTMLFormElement>(null);
      const loading = ref<boolean>(false);
  
      const formData = ref({
        Filter: '',
        fromName: 'A',
        toName: 'Z',
        exportFormat: "excel"
      });
  
      const rules = ref({
        // fromChar: [
        //   {
        //     required: true,
        //     message: "Seleziona la prima lettera del range",
        //     trigger: "change",
        //   },
        // ]
      });
  
      const submit = () => {
        if (!formRef.value) {
          return;
        }
  
        formRef.value.validate((valid: boolean) => {
          if (valid) {
            loading.value = true;
            let api = ref("");
            let output = ref("");
            if (formData.value.exportFormat == "excel") {
              api.value = "StockExportExcel";
              output.value = ".xlsx"
            } else if (formData.value.exportFormat == "csv") {
              api.value = "StockExportCsv";
              output.value = ".csv"
            } else {
              Swal.fire({
                text: "Attenzione, selezionare il formato del file.",
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Continua!",
                heightAuto: false,
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              });
              loading.value = false;
              return;
            }
  
            ApiService.get(`GoodReceipt/${api.value}?fromName=${formData.value.fromName}&toName=${formData.value.toName}`, "blob")
              .then((response) => {
  
                const url = URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'export entrata merci' + output.value);
                document.body.appendChild(link);
                link.click();
  
                window.URL.revokeObjectURL(url);
                document.body.removeChild(link);
  
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
        getAssetPath,
        alphabet
      };
    },
  });
  </script>
  