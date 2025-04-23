import ApiService from "@/core/services/ApiService";

interface IGoodReceipt {
  id: number;
  documentNumber: number;
  date: string;
  typeId: number;
  goodId: number;
  goodName: string;
  material: string;
  quantity: number;
  note: string;
  supplierId: number;
  supplier: {
    id: number;
    name: string;
    code: string;
    uniqueCode: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    province: string;
    vatNumber: string;
    fiscalCode: string;
    contactPerson: string;
    phone: number;
    mobile: number;
    email: string;
    pec: string;
    fax: string;
    referenceAgent: string;
    paymentTypeId: number;
    bankDetails: string;
    notes: string;
    creationDate: string;
    updateDate: string;
  };
}

const emptyGoodReceipt: IGoodReceipt = {
  id: 0,
  documentNumber: 0,
  date: "",
  typeId: 0,
  goodId: 0,
  goodName: "",
  material: "",
  quantity: 0,
  note: "",
  supplierId: 0,
  supplier: {
    id: 0,
    name: "",
    code: "",
    uniqueCode: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    province: "",
    vatNumber: "",
    fiscalCode: "",
    contactPerson: "",
    phone: 0,
    mobile: 0,
    email: "",
    pec: "",
    fax: "",
    referenceAgent: "",
    paymentTypeId: 0,
    bankDetails: "",
    notes: "",
    creationDate: "",
    updateDate: "",
  }
}

interface IGoodsList {
  id: number;
  name: string;
}

const getGoodReceipts = (filterRequest: string) => {
  return ApiService.get(
    `GoodReceipt/Get?currentPage=0&filterRequest=${filterRequest}`,
    ""
  )
    .then(({ data }) => {
      const results: Array<IGoodReceipt> = data.data;
      return results;
    })
    .catch(({ response }) => {
      console.log(response);
      return [];
    });
};

const getGoodReceipt = (id) => {
  return ApiService.get(`GoodReceipt/GetById?id=${id}`, "")
    .then(({ data }) => {
      const result: IGoodReceipt = data;
      result.date =  new Date(data.date).toISOString().split('T')[0]
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};

export { getGoodReceipts, getGoodReceipt, emptyGoodReceipt };

export type { IGoodReceipt, IGoodsList };
