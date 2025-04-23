import ApiService from "@/core/services/ApiService";

interface IDeliveryType {
  id: number;
  name: string;
}

const getDeliveryTypes = (filterRequest: string) => {
  return ApiService.get(`DeliveryType/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IDeliveryType> = data.data.map(item => ({
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

const getDeliveryType = (id) => {
  return ApiService.get(`DeliveryType/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IDeliveryType = {
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


export { getDeliveryTypes, getDeliveryType };

export type { IDeliveryType };