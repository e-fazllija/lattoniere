import ApiService from "@/core/services/ApiService";

interface ICustomerType {
  id: number;
  name: string;
}

const getCustomerTypes = (filterRequest: string) => {
  return ApiService.get(`CustomerType/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<ICustomerType> = data.data.map(item => ({
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

const getCustomerType = (id) => {
  return ApiService.get(`CustomerType/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: ICustomerType = {
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


export { getCustomerTypes, getCustomerType };

export type { ICustomerType };