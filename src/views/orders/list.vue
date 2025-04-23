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
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add">
                        <KTIcon icon-name="plus" icon-class="fs-2" />
                        Aggiungi commessa
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
                <template v-slot:id="{ row: item }">
                    {{ item.id }}
                </template>
                <template v-slot:job_id="{ row: item }">
                    <router-link :to="{ name: 'update-accessory', params: { id: item.id } }"
                        class="text-gray-600 text-hover-primary mb-1">
                        {{ item.job_id }}
                    </router-link>
                </template>
                <template v-slot:job_name="{ row: item }">
                    {{ item.job_name }}
                </template>
                <template v-slot:cst_name="{ row: item }">
                    {{
                        item.cst_name
                    }}
                </template>
                <template v-slot:actions="{ row: item }">
                    <button @click="createXmlFileList(item.id)" class="btn btn-light-success me-1">Crea XFL</button>
                    <!-- <router-link :to="{ name: 'update-accessory', params: { id: item.id } }"
                        class="btn btn-light-info me-1">Dettagli</router-link> -->
                    <button @click="deleteItem(item.id)" class="btn btn-light-danger me-1">Elimina</button>
                </template>
            </Datatable>
        </div>
    </div>

    <AddOrderModal @formAddSubmitted="getItems('')"></AddOrderModal>
    <ExportOrdersModal></ExportOrdersModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import ExportOrdersModal from "@/components/modals/forms/ExportOrdersModal.vue";
import AddOrderModal from "@/components/modals/forms/AddOrderModal.vue";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";
import ApiService from "@/core/services/ApiService";
import Loading from "@/components/kt-datatable/table-partials/Loading.vue"
import { getOrders } from "@/core/data/orders";
import type { IOrder } from "@/core/data/orders";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
    name: "orders-list",
    components: {
        Datatable,
        ExportOrdersModal,
        AddOrderModal,
        Loading
    },
    setup() {
        let loading = ref<boolean>(true);
        const tableHeader = ref([
            {
                columnName: "Id",
                columnLabel: "id",
                sortEnabled: true,
                columnWidth: 175,
            },
            {
                columnName: "Job id",
                columnLabel: "job_id",
                sortEnabled: true,
                columnWidth: 230,
            },
            {
                columnName: "Job name",
                columnLabel: "job_name",
                sortEnabled: true,
                columnWidth: 175,
            },
            {
                columnName: "Cliente",
                columnLabel: "cst_name",
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

        let tableData = ref<IOrder[]>([]);

        async function getItems(filterRequest: string) {
            tableData.value = await getOrders(filterRequest);
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
            ApiService.post(`Orders/Delete?id=${id}`, {})
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

        const createXmlFileList = (id) => {


            loading.value = true;

            ApiService.get(`Orders/CreateXmlFileList?id=${id}`, "blob")
                .then((response) => {

                    const url = URL.createObjectURL(new Blob([response.data]))
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'commessa_n_'+ id + ".zip");
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
            getItems,
            createXmlFileList
        };
    },
});
</script>
  ./list.vue