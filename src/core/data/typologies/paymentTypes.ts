import ApiService from "@/core/services/ApiService";

interface IPaymentType {
  id: number;
  name: string;
}

const getPaymentTypes = (filterRequest: string) => {
  return ApiService.get(`PaymentType/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IPaymentType> = data.data.map(item => ({
        id: item.id,
        name: item.name
      }));
     return results;
    })
    .catch(({ response }) => {
      console.error(response);
      return [];
    });
};

const getPaymentType = (id) => {
  return ApiService.get(`PaymentType/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IPaymentType = {
        id: item.id,
        name: item.name,
      };
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};


export { getPaymentTypes, getPaymentType };

export type { IPaymentType };