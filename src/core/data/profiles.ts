import ApiService from "@/core/services/ApiService";

interface IProfile {
  id: number;
  code: string;
  name: string;
  price: number;
  profileTypeId: number;
  supplierArticleCode: string;
  description: string;
  unitOfMeasure: string;
  supplierId: number;
  packageQuantity: number;
  quantity: number,
  minimumStock: number;
  deliveryTimeframe: string;
  deliveryTypeId: number;
  profileType:{
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

const getProfiles = (filterRequest: string) => {
  return ApiService.get(`Profiles/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IProfile> = data.data;
      return results;
    })
    .catch(({ response }) => {
      console.log(response);
      return [];
    });
};

const getProfile = (id) => {
  return ApiService.get(`Profiles/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IProfile = data;
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};

export { getProfiles, getProfile };

export type { IProfile };
