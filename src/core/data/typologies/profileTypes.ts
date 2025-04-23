import ApiService from "@/core/services/ApiService";

interface IProfileType {
  id: number;
  name: string;
}

const getProfileTypes = (filterRequest: string) => {
  return ApiService.get(`ProfileType/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IProfileType> = data.data.map(item => ({
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

const getProfileType = (id) => {
  return ApiService.get(`ProfileType/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IProfileType = {
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


export { getProfileTypes, getProfileType };

export type { IProfileType };