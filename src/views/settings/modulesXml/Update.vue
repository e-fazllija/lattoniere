<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Dettagli modulo</h3>
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
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Nome modulo</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input required type="text" class="form-control form-control-lg " placeholder="Nome" v-model="item.name" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label required fw-semobold fs-6">Nome xml Opera</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input required type="text" class="form-control form-control-lg " placeholder="Nome xml Opera"
              v-model="item.nameXmlOpera" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <hr/>

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
        <div class="row mb-6 justify-content-end">
          <div class="col-lg-4">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">Arrotondamento per difetto</label>
          <!--end::Label-->
            <input class="form-check-input ms-2" v-model="item.roundDx" type="checkbox" />
          </div>
          <div class="col-lg-4">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">Arrotondamento per eccesso</label>
          <!--end::Label-->
            <input class="form-check-input ms-2" v-model="item.ceilDx" type="checkbox" />
          </div>
        </div>
        <!--end::Input group-->

        <hr/>

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">DA</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="DA"
              v-model="item.da" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6 justify-content-end">
          <div class="col-lg-4">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">Arrotondamento per difetto</label>
          <!--end::Label-->
            <input class="form-check-input ms-2" v-model="item.roundDa" type="checkbox" />
          </div>
          <div class="col-lg-4">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">Arrotondamento per eccesso</label>
          <!--end::Label-->
            <input class="form-check-input ms-2" v-model="item.ceilDa" type="checkbox" />
          </div>
        </div>
        <!--end::Input group-->

        <hr/>

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">NRip</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="NRip"
              v-model="item.nRip" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6 justify-content-end">
          <div class="col-lg-4">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">Arrotondamento per difetto</label>
          <!--end::Label-->
            <input class="form-check-input ms-2" v-model="item.roundNRip" type="checkbox" />
          </div>
          <div class="col-lg-4">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">Arrotondamento per eccesso</label>
          <!--end::Label-->
            <input class="form-check-input ms-2" v-model="item.ceilNRip" type="checkbox" />
          </div>
        </div>
        <!--end::Input group-->

        <hr/>

        <!--begin::Input group-->
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-semobold fs-6">DxRip</label>
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8 fv-row">
            <input type="text" class="form-control form-control-lg " placeholder="DxRip"
              v-model="item.dxRip" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="row mb-6 justify-content-end">
          <div class="col-lg-4">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">Arrotondamento per difetto</label>
          <!--end::Label-->
            <input class="form-check-input ms-2" v-model="item.roundDxRip" type="checkbox" />
          </div>
          <div class="col-lg-4">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">Arrotondamento per eccesso</label>
          <!--end::Label-->
            <input class="form-check-input ms-2" v-model="item.ceilDxRip" type="checkbox" />
          </div>
        </div>
        <!--end::Input group-->

        <hr/>
        
        <!--begin::Input group-->
        <div class="row mb-6">
          <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="item.byRange" />
                  <label class="form-check-label">
                    Controllo sul range
                  </label>
                </div>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div v-if="item.byRange" class="row mb-6">
          <div class="col-lg-6">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">Da</label>
          <!--end::Label-->
            <input required class="form-control ms-2" v-model="item.from" type="text" />
          </div>
          <div class="col-lg-6">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">a</label>
          <!--end::Label-->
            <input required class="form-control ms-2" v-model="item.to" type="text" />
          </div>
        </div>
        <!--end::Input group-->

        <hr/>

        <!--begin::Input group-->
        <div class="row mb-6">
          <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="item.byCustomer" />
                  <label class="form-check-label">
                    Controllo sul cliente
                  </label>
                </div>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div v-if="item.byCustomer" class="row mb-6">

          <!--begin::Col-->
          <div class="fv-row">
            <input required type="text" class="form-control form-control-lg " placeholder="Nome cliente"
              v-model="item.customer" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->


        <hr/>

        <!--begin::Input group-->
        <div class="row mb-6">
          <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="item.byMaterial" />
                  <label class="form-check-label">
                    Controllo sul materiale
                  </label>
                </div>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div v-if="item.byMaterial" class="row mb-6">

          <!--begin::Col-->
          <div class="fv-row">
            <input required type="text" class="form-control form-control-lg " placeholder="Nome materiale"
              v-model="item.materialName" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->


        <hr/>

        <!--begin::Input group-->
        <div class="row mb-6">
          <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="item.byMaterialColor" />
                  <label class="form-check-label">
                    Controllo sul colore del materiale
                  </label>
                </div>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div v-if="item.byMaterialColor" class="row mb-6">

          <!--begin::Col-->
          <div class="fv-row">
            <input required type="text" class="form-control form-control-lg " placeholder="Colore materiale"
              v-model="item.materialColor" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->


        <hr/>

          <!--begin::Input group-->
          <div class="row mb-6">
          <div class="form-check form-switch form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" v-model="item.byModel" />
                  <label class="form-check-label">
                    Controllo sul modello della grata
                  </label>
                </div>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div v-if="item.byModel" class="row mb-6">

          <!--begin::Col-->
          <div class="fv-row">
            <input required type="text" class="form-control form-control-lg " placeholder="Modello della grata"
              v-model="item.model" />
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->


        <hr/>
        
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
import { getModuleXml, emptyModuleXml } from "@/core/data/modulesXml";
import type { IModuleXml } from "@/core/data/modulesXml";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "module-xml-details",
  components: {
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    let loading = ref<boolean>(true);

    const item = ref<IModuleXml>(emptyModuleXml);

    async function getItem() {

      const module = await getModuleXml(id);
      item.value = module || emptyModuleXml;
      loading.value = false;
    };

    onMounted(() => {
      loading.value = true;
      getItem();
    });

    const saveChanges = () => {
      loading.value = true;

      ApiService.post(`ModuleXml/Update`, item.value)
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
            router.push({ name: 'modules-xml-list' })
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
      ApiService.post(`Materials/Delete?id=${id}`, {})
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
          router.push({ name: 'modules-xml-list' })
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
  