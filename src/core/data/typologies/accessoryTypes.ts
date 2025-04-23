import ApiService from "@/core/services/ApiService";

interface IAccessoryType {
  id: number;
  name: string;
}

const getAccessoryTypes = (filterRequest: string) => {
  return ApiService.get(`AccessoryType/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IAccessoryType> = data.data.map(item => ({
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

const getAccessoryType = (id) => {
  return ApiService.get(`AccessoryType/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IAccessoryType = {
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

export { getAccessoryTypes, getAccessoryType };

export type { IAccessoryType };
