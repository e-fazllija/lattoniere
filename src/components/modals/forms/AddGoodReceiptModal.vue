<template>
  <div class="modal fade" id="kt_modal_add" ref="addCustomerModalRef" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Aggiungi entrata merci</h2>
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
                <label class="required fs-6 fw-semobold mb-2">Numero documento</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.DocumentNumber" type="text"
                  placeholder="Numero documento..." />
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Data</span>
                </label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Date" type="date" placeholder="Data..." />
                <!--begin::Input-->
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Tipologia</span>
                </label>
                <!--end::Label-->
                <select class="form-select" aria-label="Select example" v-model="typeId">
                  <option value="0">Accessorio</option>
                  <option value="1">Profilo</option>
                  <option value="2">Materiale</option>
                </select>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Lotto</span>
                </label>
                <!--end::Label-->
                <select class="form-select" aria-label="Select example" v-model="formData.GoodId">
                  <option v-for="item in GoodsList" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Quantità</label>
                <!--end::Label-->
                <input class="form-control" v-model="formData.Quantity" type="number" placeholder="Quantità..." />
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
                <label class="fs-6 fw-semobold mb-2">Descrizione</label>
                <!--end::Label-->
                <textarea class="form-control" v-model="formData.Note" type="text" placeholder="Descrizione..."></textarea>
                <!--begin::Input-->
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
import { defineComponent, ref, onMounted, watch } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { getAccessories } from "@/core/data/accessories";
import type { IAccessory } from "@/core/data/accessories";
import { getMaterials } from "@/core/data/materials";
import type { IMaterial } from "@/core/data/materials";
import { getProfiles } from "@/core/data/profiles";
import type { IProfile } from "@/core/data/profiles";
import { getSuppliers } from "@/core/data/suppliers";
import type { ISupplier } from "@/core/data/suppliers";
import type { IGoodsList } from "@/core/data/goodsReceipt";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
interface ICreate {
  DocumentNumber: number,
  Date: string,
  TypeId: number,
  GoodId: number,
  GoodName: string,
  Quantity: number,
  Supplier: string,
  SupplierId: number,
  Note: string
}
export default defineComponent({
  name: "add-accessory-modal",
  components: {},
  setup(props, { emit }) {
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref<ICreate>({
      DocumentNumber: 0,
      Date: Date(),
      TypeId: 0,
      GoodId: 0,
      GoodName: "",
      Quantity: 0,
      Supplier: "",
      SupplierId: 0,
      Note: ""
    });

    const rules = ref({
      DocumentNumber: [
        {
          required: true,
          message: "Inserire il numero del documento",
          trigger: "change",
        },
      ],
      Quantity: [
        {
          required: true,
          message: "Inserire la quantità",
          trigger: "change",
        },
      ]
    });

    const controller = "GoodReceipt"
    let Accessories = ref<IAccessory[]>([]);
    let Materials = ref<IMaterial[]>([]);
    let Profiles = ref<IProfile[]>([]);
    let Suppliers = ref<ISupplier[]>([]);
    let GoodsList = ref<IGoodsList[]>([]);
    const typeId = ref(0);

    async function _getTypes() {
      try {
        Suppliers.value = await getSuppliers("");
        Accessories.value = await getAccessories("");
        GoodsList.value = Accessories.value.map(item => ({
          id: item.id,
          name: item.name
        }));
      } catch (error) {
        console.error(error);
      }
    }

    onMounted(() => {
      _getTypes();
    });

    

    watch(typeId, async (newTypeId, oldTypeId) => {
      GoodsList.value = [];
      formData.value.TypeId = newTypeId;
      if (newTypeId == 0 && oldTypeId != 0) {
        Accessories.value = await getAccessories("");
        GoodsList.value = Accessories.value.map(item => ({
          id: item.id,
          name: item.name
        }));
      } else if (newTypeId == 1&& oldTypeId != 1) {
        Profiles.value = await getProfiles("");
        GoodsList.value = Profiles.value.map(item => ({
          id: item.id,
          name: item.name
        }));
      } else if (newTypeId == 2&& oldTypeId != 2) {
        Materials.value = await getMaterials("");
        GoodsList.value = Materials.value.map(item => ({
          id: item.id,
          name: item.name
        }));
      }
    })

    const submit = () => {
      
      if (!formRef.value) {
        return;
      }

      if (formData.value.GoodId == 0) {
        Swal.fire({
          text: "Attenzione, selezionare il tipo di lotto.",
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

      formData.value.GoodName = GoodsList.value.find(option => option.id === formData.value.GoodId)?.name || "";
      
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
              console.log(response.data.message);
              loading.value = false;
              Swal.fire({
                text: response.data.message,
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
      Suppliers,
      GoodsList,
      typeId
    };
  },
});
</script>
