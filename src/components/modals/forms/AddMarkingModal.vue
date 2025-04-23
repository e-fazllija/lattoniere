<template>
    <div class="modal fade" id="kt_modal_add" ref="addModalRef" tabindex="-1" aria-hidden="true">
        <!--begin::Modal dialog-->
        <div class="modal-dialog modal-dialog-centered mw-650px">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header" id="kt_modal_add_header">
                    <!--begin::Modal title-->
                    <h2 class="fw-bold">Aggiungi marcatura</h2>
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
                                <label class="fs-6 fw-semobold mb-2">
                                    <span class="required">Nome materiale</span>
                                </label>
                                <!--end::Label-->
                                <input class="form-control" v-model="formData.MaterialName" type="text"
                                    placeholder="Nome materiale..." />
                                <!--begin::Input-->
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semobold mb-2">
                                    <span class="required">IdFac</span>
                                </label>
                                <!--end::Label-->
                                <input class="form-control" v-model="formData.IdFac" type="text" placeholder="IdFac..." />
                                <!--begin::Input-->
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semobold mb-2">
                                    <span class="required">DX</span>
                                </label>
                                <!--end::Label-->
                                <input class="form-control" v-model="formData.Dx" type="text" placeholder="DX..." />
                                <!--begin::Input-->
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semobold mb-2">
                                    <span class="required">DY</span>
                                </label>
                                <!--end::Label-->
                                <input class="form-control" v-model="formData.Dy" type="text" placeholder="DY..." />
                                <!--begin::Input-->
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semobold mb-2">
                                    <span class="required">Lung</span>
                                </label>
                                <!--end::Label-->
                                <input class="form-control" v-model="formData.Lung" type="text" placeholder="Lung..." />
                                <!--begin::Input-->
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semobold mb-2">
                                    <span class="required">Larg</span>
                                </label>
                                <!--end::Label-->
                                <input class="form-control" v-model="formData.Larg" type="text" placeholder="Larg..." />
                                <!--begin::Input-->
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->


                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semobold mb-2">
                                    <span class="required">Str</span>
                                </label>
                                <!--end::Label-->
                                <input class="form-control" v-model="formData.Str" type="text" placeholder="Str..." />
                                <!--begin::Input-->
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <div class="fv-row mb-7">
                                <label class="fs-6 fw-semobold mb-2">Range</label>
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="row mb-7">
                                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                                    <label class="fs-6 fw-semobold mb-2">Da</label>
                                    <!--end::Label-->
                                    <input class="form-control ms-2" v-model="formData.From" type="number" />
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12"><!--begin::Label-->
                                    <label class="fs-6 fw-semobold mb-2">A</label>
                                    <!--end::Label-->
                                    <input class="form-control ms-2" v-model="formData.To" type="number" />
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
import { defineComponent, ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";

interface ICreate {
  MaterialName?: string;
  IdFac?: string;
  Dx?: string;
  Dy?: string;
  Lung?: string;
  Larg?: string;
  Str?: string;
  From?: string;
  To?: string;
}

export default defineComponent({
    name: "add-marking-modal",
    components: {},
    setup(props, { emit }) {
        const formRef = ref<null | HTMLFormElement>(null);
        const addCustomerModalRef = ref<null | HTMLElement>(null);
        const loading = ref<boolean>(false);
            const formData = ref<ICreate>({
                MaterialName: "",
                IdFac: "0",
                Dx:  "0",
                Dy:  "0",
                Lung:  "0",
                Larg:  "0",
                Str:  "0",
                From:  "",
                To:  ""
            });
        const rules = ref({
            MaterialName: [
                {
                    required: true,
                    message: "Inserire il nome del materiale",
                    trigger: "change",
                },
            ],
        });

        const controller = "Marking"

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
                            })
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
            getAssetPath
        };
    },
});
</script>
  