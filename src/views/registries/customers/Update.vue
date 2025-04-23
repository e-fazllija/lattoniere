<template>
    <!--begin::Basic info-->
    <div class="card mb-5 mb-xl-10">
        <!--begin::Card header-->
        <div class="card-header border-0">
            <!--begin::Card title-->
            <div class="card-title m-0">
                <h3 class="fw-bold m-0">Dettagli</h3>
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
                    <label class="col-lg-4 col-form-label required fw-semobold fs-6">Codice</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="code" class="form-control form-control-lg " placeholder="Codice"
                            v-model="item.code" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label required fw-semobold fs-6">Nome</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="name" class="form-control form-control-lg " placeholder="Nome"
                            v-model="item.name" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label required fw-semobold fs-6">Tipologia cliente</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <select as="select" name="customerType" class="form-select form-select-lg fw-semobold"
                            v-model="item.customerTypeId">
                            <option v-for="option in CustomerTypes" :key="option.id" :value="option.id">{{ option.name
                                }}
                            </option>
                        </select>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label required fw-semobold fs-6">Modalità di pagamento</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <select as="select" name="paymentType" class="form-select form-select-lg fw-semobold"
                            v-model="item.paymentTypeId">
                            <option v-for="option in PaymentTypes" :key="option.id" :value="option.id">{{ option.name
                                }}
                            </option>
                        </select>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label required fw-semobold fs-6">Modalità di consegna</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <select as="select" name="deliveryType" class="form-select form-select-lg fw-semobold"
                            v-model="item.deliveryTypeId">
                            <option v-for="option in DeliveryTypes" :key="option.id" :value="option.id">{{ option.name
                                }}
                            </option>
                        </select>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Indirizzo</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="address" class="form-control form-control-lg " placeholder="Indirizzo"
                            v-model="item.address" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">CAP</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="supplierArticleCode" class="form-control form-control-lg "
                            placeholder="CAP" v-model="item.zipCode" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Città</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="city" class="form-control form-control-lg " placeholder="Città"
                            v-model="item.city" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Nazione</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="country" class="form-control form-control-lg " placeholder="Nazione"
                            v-model="item.country" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Provincia</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="province" class="form-control form-control-lg " placeholder="Provincia"
                            v-model="item.province" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Note</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Note"
                            v-model="item.notes" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Indirizzo sede amministativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg "
                            placeholder="Indirizzo sede amministativa" v-model="item.administrativeOfficeAddress" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Cap sede amministativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Cap sede amministativa"
                            v-model="item.administrativeOfficeZipCode" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Città sede amministativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Città sede amministativa"
                            v-model="item.administrativeOfficeCity" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Nazione sede amministativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg "
                            placeholder="Nazione sede amministativa" v-model="item.administrativeOfficeCountry" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Provincia sede amministativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg "
                            placeholder="Provincia sede amministativa" v-model="item.administrativeOfficeProvince" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Indirizzo sede operativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Indirizzo sede operativa"
                            v-model="item.operatingOfficeAddress" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Cap sede operativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Cap sede operativa"
                            v-model="item.operatingOfficeZipCode" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Città sede operativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Città sede operativa"
                            v-model="item.operatingOfficeCity" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Nazione sede operativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Nazione sede operativa"
                            v-model="item.operatingOfficeCountry" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Provincia sede operativa</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Provincia sede operativa"
                            v-model="item.operatingOfficeProvince" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">P. IVA</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="P. IVA"
                            v-model="item.vatNumber" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Codice ficale</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Codice ficale"
                            v-model="item.fiscalCode" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Referente</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Referente"
                            v-model="item.contactPerson" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Telefono</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Telefono"
                            v-model="item.phone" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Cellulare</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Cellulare"
                            v-model="item.mobile" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Email</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Email"
                            v-model="item.email" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">PEC</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="PEC" v-model="item.pec" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Codice univoco</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Codice univoco"
                            v-model="item.uniqueCode" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Agente di riferimento</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Agente di riferimento"
                            v-model="item.referenceAgent" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Coordinate bancarie</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Coordinate bancarie"
                            v-model="item.bankCoordinates" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Fax</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Fax" v-model="item.fax" />
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">Banca</label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                        <input type="text" class="form-control form-control-lg " placeholder="Banca" v-model="item.bank" />
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
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";
import CreditBalance from "@/components/customers/cards/overview/CreditBalance.vue";
import Invoices from "@/components/customers/cards/overview/Invoices.vue";

import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import Logs from "@/components/customers/cards/events-and-logs/Logs.vue";

import Earnings from "@/components/customers/cards/statments/Earnings.vue";
import Statement from "@/components/customers/cards/statments/Statement.vue";

import { useRoute, useRouter } from "vue-router";
import { getCustomer } from "@/core/data/customers";
import { getCustomerTypes } from "@/core/data/typologies/customerTypes";
import type { ICustomerType } from "@/core/data/typologies/customerTypes";
import { getDeliveryTypes } from "@/core/data/typologies/DeliveryTypes";
import type { IDeliveryType } from "@/core/data/typologies/DeliveryTypes";
import { getPaymentTypes } from "@/core/data/typologies/paymentTypes";
import type { IPaymentType } from "@/core/data/typologies/paymentTypes";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";

interface IUpdate {
    id,
    address: String,
    zipCode: String,
    city: String,
    country: String,
    province: String,
    administrativeOfficeAddress: String,
    administrativeOfficeZipCode: String,
    administrativeOfficeCity: String,
    administrativeOfficeCountry: String,
    administrativeOfficeProvince: String,
    operatingOfficeAddress: String,
    operatingOfficeZipCode: String,
    operatingOfficeCity: String,
    operatingOfficeCountry: String,
    operatingOfficeProvince: String,
    vatNumber: String,
    fiscalCode: String,
    contactPerson: String,
    phone: String,
    mobile: String,
    email: String,
    pec: String,
    uniqueCode: String,
    referenceAgent: String,
    paymentTypeId: Number,
    paymentType: String,
    bankCoordinates: String,
    notes: String,
    fax: String,
    bank: String,
    deliveryTypeId: Number,
    deliveryType: String,
    customerType: String,
    customerTypeId: Number,
    code: String,
    name: String
}

export default defineComponent({
    name: "customer-details",
    components: {
        PaymentRecords,
        PaymentMethods,
        CreditBalance,
        Invoices,
        Events,
        Logs,
        Earnings,
        Statement,
        Dropdown3,
        NewCardModal,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const id = route.params.id;
        let loading = ref<boolean>(true);

        const item = ref<IUpdate>({
            id: 0,
            zipCode: "",
            address: "",
            city: "",
            country: "",
            province: "",
            administrativeOfficeAddress: "",
            administrativeOfficeZipCode: "",
            administrativeOfficeCity: "",
            administrativeOfficeCountry: "",
            administrativeOfficeProvince: "",
            operatingOfficeAddress: "",
            operatingOfficeZipCode: "",
            operatingOfficeCity: "",
            operatingOfficeCountry: "",
            operatingOfficeProvince: "",
            vatNumber: "",
            fiscalCode: "",
            contactPerson: "",
            phone: "",
            mobile: "",
            email: "",
            pec: "",
            uniqueCode: "",
            referenceAgent: "",
            paymentTypeId: 0,
            paymentType: "",
            bankCoordinates: "",
            notes: "",
            fax: "",
            bank: "",
            deliveryTypeId: 0,
            deliveryType: "",
            customerType: "",
            customerTypeId: 0,
            code: "",
            name: ""
        });

        let CustomerTypes = ref<ICustomerType[]>([]);
        let PaymentTypes = ref<IPaymentType[]>([]);
        let DeliveryTypes = ref<IDeliveryType[]>([]);

        async function getItem() {
            CustomerTypes.value = await getCustomerTypes("");
            PaymentTypes.value = await getPaymentTypes("");
            DeliveryTypes.value = await getDeliveryTypes("");

            const customer = await getCustomer(id);
            
            item.value = {
                id: id,
                code: customer?.code|| "",
                name: customer?.name|| "",
                customerTypeId: customer?.customerTypeId|| 0,
                address: customer?.address|| "",
                zipCode: customer?.zipCode|| "",
                city: customer?.city|| "",
                country: customer?.country|| "",
                province: customer?.province|| "",
                administrativeOfficeAddress: customer?.administrativeOfficeAddress|| "",
                administrativeOfficeZipCode: customer?.administrativeOfficeZipCode|| "",
                administrativeOfficeCity: customer?.administrativeOfficeCity|| "",
                administrativeOfficeCountry: customer?.administrativeOfficeCountry || "",
                administrativeOfficeProvince: customer?.administrativeOfficeProvince|| "",
                operatingOfficeAddress: customer?.operatingOfficeAddress|| "",
                operatingOfficeZipCode: customer?.operatingOfficeZipCode|| "",
                operatingOfficeCity: customer?.operatingOfficeCity|| "",
                operatingOfficeCountry: customer?.operatingOfficeCountry|| "",
                operatingOfficeProvince: customer?.operatingOfficeProvince|| "",
                vatNumber: customer?.vatNumber|| "",
                fiscalCode: customer?.fiscalCode|| "",
                contactPerson: customer?.contactPerson|| "",
                phone: customer?.phone|| "",
                mobile: customer?.mobile|| "", 
                email: customer?.email|| "",
                pec: customer?.pec || "",
                uniqueCode: customer?.uniqueCode|| "",
                referenceAgent: customer?.referenceAgent|| "",
                paymentTypeId: customer?.paymentTypeId|| 0,
                bankCoordinates: customer?.bankCoordinates|| "",
                notes: customer?.notes|| "",
                fax: customer?.fax|| "",
                bank: customer?.bank|| "",
                deliveryTypeId: customer?.deliveryTypeId || 0,
                customerType: customer?.customerType?.name || "",
                deliveryType: customer?.deliveryType?.name || "",
                paymentType: customer?.paymentType?.name || "",
            }
            console.log(customer)
            loading.value = false;
        };

        onMounted(() => {
            loading.value = true;
            getItem();
        });

        const saveChanges = () => {
            loading.value = true;
     
            ApiService.post(`Customers/Update`, item.value)
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

                        router.push({ name: 'customers-list' })
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
            ApiService.post(`Customers/Delete?id=${id}`, {})
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

                    router.push({ name: 'customers-list' })
                })
                .catch(({ response }) => {
                    console.log(response);
                });
        };

        return {
            getAssetPath,
            item,
            saveChanges,
            CustomerTypes,
            PaymentTypes,
            DeliveryTypes,
            deleteItem,
            loading
        };
    },
});
</script>
    