import ApiService from "@/core/services/ApiService";

interface IMaterialType {
  id: number;
  name: string;
}

const getMaterialTypes = (filterRequest: string) => {
  return ApiService.get(`MaterialType/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IMaterialType> = data.data.map(item => ({
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

const getMaterialType = (id) => {
  return ApiService.get(`MaterialType/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IMaterialType = {
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


export { getMaterialTypes, getMaterialType };

export type { IMaterialType };