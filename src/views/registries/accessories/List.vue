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
                    data-kt-customer-table-toolbar="base">
                    <!--begin::Export-->
                    <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal"
                        data-bs-target="#kt_export_modal">
                        <KTIcon icon-name="exit-up" icon-class="fs-2" />
                        Export
                    </button>
                    <!--end::Export-->
                    <!--begin::Add customer-->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#kt_modal_add">
                        <KTIcon icon-name="plus" icon-class="fs-2" />
                        Aggiungi accessorio
                    </button>
                    <!--end::Add customer-->
                </div>
                <!--end::Toolbar-->
                <!--begin::Group actions-->
                <div v-else class="d-flex justify-content-end align-items-center" data-kt-customer-table-toolbar="selected">
                    <div class="fw-bold me-5">
                        <span class="me-2">{{ selectedIds.length }}</span>Selezionati
                    </div>
                    <button type="button" class="btn btn-danger" @click="deleteFewItems()">
                        Elimina Selezionati
                    </button>
                </div>
                <!--end::Group actions-->
                <!--begin::Group actions-->
                <div class="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">
                    <div class="fw-bold me-5">
                        <span class="me-2" data-kt-customer-table-select="selected_count"></span>Selezionati
                    </div>
                    <button type="button" class="btn btn-danger" data-kt-customer-table-select="delete_selected">
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
                    <router-link :to="{ name: 'update-accessory', params: { id: item.id } }" class="text-gray-600 text-hover-primary mb-1">
                        {{ item.name }}
                    </router-link>
                </template>
                <template v-slot:price="{ row: item }">
                    {{ item.price }}
                </template>
                <template v-slot:description="{ row: item }">
                    {{
                        item.description
                    }}
                </template>
                <template v-slot:actions="{ row: item }">
                    <router-link :to="{ name: 'update-accessory', params: { id: item.id } }" class="btn btn-light-info me-1">Dettagli</router-link>
                    <button @click="deleteItem(item.id)" class="btn btn-light-danger me-1">Elimina</button>
                </template>
            </Datatable>
        </div>
    </div>


    <ExportAccessoriesModal></ExportAccessoriesModal>
    <AddAccessoryModal @formAddSubmitted="getItems('')"></AddAccessoryModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import ExportAccessoriesModal from "@/components/modals/forms/ExportAccessoriesModal.vue";
import AddAccessoryModal from "@/components/modals/forms/AddAccessoryModal.vue";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";
import ApiService from "@/core/services/ApiService";
import Loading from "@/components/kt-datatable/table-partials/Loading.vue"
import { getAccessories } from "@/core/data/accessories";
import type { IAccessory } from "@/core/data/accessories";

export default defineComponent({
    name: "accessories-list",
    components: {
        Datatable,
        ExportAccessoriesModal,
        AddAccessoryModal,
        Loading
    },
    setup() {
        let loading = ref<boolean>(true);
        const tableHeader = ref([
            {
                columnName: "Codice",
                columnLabel: "code",
                sortEnabled: true,
                columnWidth: 175,
            },
            {
                columnName: "Nome",
                columnLabel: "name",
                sortEnabled: true,
                columnWidth: 230,
            },
            {
                columnName: "Prezzo",
                columnLabel: "price",
                sortEnabled: true,
                columnWidth: 175,
            },
            {
                columnName: "Descrizione",
                columnLabel: "description",
                sortEnabled: true,
                columnWidth: 175,
            },
            {
                columnName: "Azioni",
                columnLabel: "actions",
                sortEnabled: false,
                columnWidth: 135,
            },
        ]);

        const selectedIds = ref<Array<number>>([]);
        
        let tableData = ref<IAccessory[]>([]);

        async function getItems(filterRequest: string) {
            tableData.value = await getAccessories(filterRequest);
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
            ApiService.post(`Accessories/Delete?id=${id}`, {})
                .then(() => {
                    getItems("");
                })
                .catch(({ response }) => {
                    console.log(response);
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
            getItems
        };
    },
});
</script>
  