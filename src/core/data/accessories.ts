import ApiService from "@/core/services/ApiService";

interface IAccessory {
  id: number;
  code: string;
  name: string;
  price: number;
  accessoryTypeId: number;
  supplierArticleCode: string;
  description: string;
  unitOfMeasure: string;
  supplierId: number;
  packageQuantity: number;
  quantity: number,
  minimumStock: number;
  deliveryTimeframe: string;
  deliveryTypeId: number;
  accessoryType:{
    id:number;
    name: string;
  };
  supplier:{
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
  deliveryType:{
    id:number;
    name: string;
  };
}

const getAccessories = (filterRequest: string) => {
  return ApiService.get(`Accessories/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IAccessory> = data.data;
      return results;
    })
    .catch(({ response }) => {
      console.log(response);
      return [];
    });
};

const getAccessory = (id) => {
  return ApiService.get(`Accessories/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IAccessory = data;
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};

export { getAccessories, getAccessory };

export type { IAccessory };
