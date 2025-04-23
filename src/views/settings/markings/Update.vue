<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Dettagli marcatura</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->
  </div>
  <!--begin::Content-->
  <div class="collapse show">
    <!--begin::Form-->
    <form class="form" novalidate @submit.prevent="saveChanges()">
      <!--begin::Card body-->
      <div class="card-body border-top p-9">

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Nome materiale</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input required type="text" class="form-control form-control-lg " placeholder="Nome" v-model="item.materialName" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">IdFac</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input required type="text" class="form-control form-control-lg " placeholder="IdFac"
              v-model="item.idFac" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">DX</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="DX"
              v-model="item.dx" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">DY</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="DY"
              v-model="item.dy" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Lung</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="Lung"
              v-model="item.lung" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Larg</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="Larg"
              v-model="item.larg" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

         <!--begin::Input group-->
         <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">Str</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="Str"
              v-model="item.str" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

         <!--begin::Input group-->
         <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-12 col-form-label fw-semobold fs-6">Range</label>
          <!--end::Label-->
        </div>
        <!--end::Input group-->

         <!--begin::Input group-->
         <div class="row mb-6">
          <!--begin::Col-->
          <div class="col-lg-6 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="Da"
              v-model="item.from" />
          </div>
          <!--end::Col-->

           <!--begin::Col-->
           <div class="col-lg-6 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="A"
              v-model="item.to" />
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

import { useRoute, useRouter } from "vue-router";
import { getMarking, emptyMarking } from "@/core/data/markings";
import type { IMarking } from "@/core/data/markings";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "marking-xml-details",
  components: {
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    let loading = ref<boolean>(true);

    const item = ref<IMarking>(emptyMarking);

    async function getItem() {

      const marking = await getMarking(id);
      item.value = marking || emptyMarking;
      console.log(item.value)
      loading.value = false;
    };

    onMounted(() => {
      loading.value = true;
      getItem();
    });

    const saveChanges = () => {
      loading.value = true;

      ApiService.post(`Marking/Update`, item.value)
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
            router.push({ name: 'markings-list' })
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
      ApiService.post(`Marking/Delete?id=${id}`, {})
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
          router.push({ name: 'markings-list' })
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };

    return {
      getAssetPath,
      item,
      saveChanges,
      deleteItem,
      loading
    };
  },
});
</script>
  