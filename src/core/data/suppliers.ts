import ApiService from "@/core/services/ApiService";

interface ISupplier {
  id: number;
  name: string;
  code: string;
  uniqueCode?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  province?: string;
  vatNumber?: string;
  fiscalCode?: string;
  contactPerson?: string;
  phone?: number;
  mobile?: number;
  email?: string;
  pec?: string;
  fax?: string;
  referenceAgent?: string;
  paymentTypeId: number;
  bankDetails?: string;
  notes?: string;
  creationDate?: string;
  updateDate?: string;
  paymentType: {
    id: number;
    name: string;
  };
}

const getSuppliers = (filterRequest: string) => {
  return ApiService.get(`Suppliers/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<ISupplier> = data.data.map((item) => ({
        id: item.id,
        name: item.name,
        code: item.code,
        uniqueCode: item.uniqueCode,
        address:item.address,
        zipCode: item.zipCode,
        city: item.city,
        country: item.country,
        province: item.province,
        vatNumber: item.vatNumber,
        fiscalCode: item.fiscalCode,
        contactPerson: item.contactPerson,
        phone: item.phone,
        mobile: item.mobile,
        email: item.email,
        pec: item.pec,
        fax: item.fax,
        referenceAgent: item.referenceAgent,
        paymentTypeId: item.paymentTypeId,
        bankDetails: item.bankDetails,
        notes: item.notes,
        creationDate: item.creationDate,
        updateDate: item.updateDate,
        paymentType: {
          id: item.paymentType.id,
          name: item.paymentType.name
        }
      }));
      return results;
    })
    .catch(({ response }) => {
      console.error(response);
      return [];
    });
};

const getSupplier = (id) => {
  return ApiService.get(`Suppliers/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: ISupplier = {
        id: item.id,
        name: item.name,
        code: item.code,
        uniqueCode: item.uniqueCode,
        address:item.address,
        zipCode: item.zipCode,
        city: item.city,
        country: item.country,
        province: item.province,
        vatNumber: item.vatNumber,
        fiscalCode: item.fiscalCode,
        contactPerson: item.contactPerson,
        phone: item.phone,
        mobile: item.mobile,
        email: item.email,
        pec: item.pec,
        fax: item.fax,
        referenceAgent: item.referenceAgent,
        paymentTypeId: item.paymentTypeId,
        bankDetails: item.bankDetails,
        notes: item.notes,
        creationDate: item.creationDate,
        updateDate: item.updateDate,
        paymentType: {
          id: item.paymentType.id,
          name: item.paymentType.name
        }
      };
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};

export { getSuppliers, getSupplier };
export type { ISupplier };
