<template>
    <div class="card">
        <div class="card-header border-0 pt-6">
            <!--begin::Card title-->
            <div class="card-title">
                <!--begin::Search-->
                <div class="d-flex align-items-center position-relative my-1">
                    <KTIcon icon-name="magnifier" icon-class="fs-1 position-absolute ms-6" />
                    <input type="text" v-model="search" @input="searchItems()"
                        class="form-control form-control-solid w-250px ps-15" placeholder="Ricerca" />
                </div>
                <!--end::Search-->
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
                <!--begin::Toolbar-->
                <div v-if="selectedIds.length === 0" class="d-flex justify-content-end"
                    data-kt-profile-table-toolbar="base">
                    <!--begin::Add profile-->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#kt_modal_add_type">
                        <KTIcon icon-name="plus" icon-class="fs-2" />
                        Aggiungi tipologia profilo
                    </button>
                    <!--end::Add profile-->
                </div>
                <!--end::Toolbar-->
                <!--begin::Group actions-->
                <div v-else class="d-flex justify-content-end align-items-center" data-kt-profile-table-toolbar="selected">
                    <div class="fw-bold me-5">
                        <span class="me-2">{{ selectedIds.length }}</span>Selezionati
                    </div>
                    <button type="button" class="btn btn-danger" @click="deleteFewItems()">
                        Elimina Selezionati
                    </button>
                </div>
                <!--end::Group actions-->
                <!--begin::Group actions-->
                <div class="d-flex justify-content-end align-items-center d-none" data-kt-profile-table-toolbar="selected">
                    <div class="fw-bold me-5">
                        <span class="me-2" data-kt-profile-table-select="selected_count"></span>Selezionati
                    </div>
                    <button type="button" class="btn btn-danger" data-kt-profile-table-select="delete_selected">
                        Elimina Selezionati
                    </button>
                </div>
                <!--end::Group actions-->
            </div>
            <!--end::Card toolbar-->
        </div>
        <div class="card-body pt-0">
            <Datatable @on-sort="sort" @on-items-select="onItemSelect" :data="tableData" :header="tableHeader"
                :enable-items-per-page-dropdown="true" :checkbox-enabled="true" checkbox-label="id" :loading="loading">
                <template v-slot:code="{ row: item }">
                    {{ item.code }}
                </template>
                <template v-slot:name="{ row: item }">
                    <router-link :to="{ name: 'update-accessory', params: { id: item.id } }"
                        class="text-gray-600 text-hover-primary mb-1">
                        {{ item.name }}
                    </router-link>
                </template>
                <template v-slot:actions="{ row: item }">
                    <button class="btn btn-light-info me-1" data-bs-toggle="modal"
                        data-bs-target="#kt_modal_update_type"
                        @click="showUpdateModal(item.id, item.name)">Dettagli</button>
                    <button @click="deleteItem(item.id)" class="btn btn-light-danger me-1">Elimina</button>
                </template>
            </Datatable>
        </div>
    </div>
    <UpdateProfileTypeModal :id="selectedId" :name="selectedName" @formUpdateSubmitted="getItems('')"></UpdateProfileTypeModal>
    <AddProfileTypeModal @formAddSubmitted="getItems('')"></AddProfileTypeModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import UpdateProfileTypeModal from "@/components/modals/forms/typologies/profile-type/UpdateProfileTypeModal.vue";
import AddProfileTypeModal from "@/components/modals/forms/typologies/profile-type/AddProfileTypeModal.vue";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";
import ApiService from "@/core/services/ApiService";
import Loading from "@/components/kt-datatable/table-partials/Loading.vue"
import { getProfileTypes } from "@/core/data/typologies/profileTypes";
import type { IProfileType } from "@/core/data/typologies/profileTypes";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
    name: "accessory-type-list",
    components: {
        Datatable,
        UpdateProfileTypeModal,
        AddProfileTypeModal,
        Loading
    },
    setup() {
        let loading = ref<boolean>(true);
        let selectedId = ref(0);
        let selectedName = ref("");
        const tableHeader = ref([
            {
                columnName: "Nome",
                columnLabel: "name",
                sortEnabled: true,
                columnWidth: 300,
            },
            {
                columnName: "Azioni",
                columnLabel: "actions",
                sortEnabled: false,
                columnWidth: 135,
            },
        ]);

        const selectedIds = ref<Array<number>>([]);

        let tableData = ref<IProfileType[]>([]);

        async function getItems(filterRequest: string) {
            tableData.value = await getProfileTypes(filterRequest);
            loading.value = false;
        };

        onMounted(() => {
            loading.value = true;
            getItems("");
        });

        const deleteFewItems = () => {
            selectedIds.value.forEach((item) => {
                deleteItem(item);
            });
            selectedIds.value.length = 0;
        };

        const deleteItem = (id: number) => {
            loading.value = true;
            ApiService.post(`ProfileType/Delete?id=${id}`, {})
                .then(() => {
                   
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
                        getItems("");
                    });
                })
                .catch(({ response }) => {
                    Swal.fire({
                        text: response.data.message,
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Continua!",
                        heightAuto: false,
                        customClass: {
                            confirmButton: "btn btn-primary",
                        },
                    }).then(() => {
                        getItems("");
                    });
                });
        };

        const search = ref<string>("");
        const searchItems = () => {
            getItems(search.value);
            MenuComponent.reinitialization();
        };

        const sort = (sort: Sort) => {
            const reverse: boolean = sort.order === "asc";
            if (sort.label) {
                arraySort(tableData.value, sort.label, { reverse });
            }
        };
        const onItemSelect = (selectedItems: Array<number>) => {
            selectedIds.value = selectedItems;
        };

        function showUpdateModal(id, name) {
            selectedId.value = id;
            selectedName.value = name;
        }

        return {
            tableData,
            tableHeader,
            deleteItem,
            search,
            searchItems,
            selectedIds,
            deleteFewItems,
            sort,
            onItemSelect,
            getAssetPath,
            loading,
            selectedId,
            selectedName,
            showUpdateModal,
            getItems
        };
    },
});
</script>
