import ApiService from "@/core/services/ApiService";

interface IProfileXml {
  id: number;
  name: string;
  active: boolean;
}

const getProfilesXml = (filterRequest: string) => {
  return ApiService.get(`ProfileXml/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IProfileXml> = data.data.map(item => ({
        id: item.id,
        name: item.name,
        active: item.active
      }));
     return results;
    })
    .catch(({ response }) => {
      console.error(response);
      return [];
    });
};

const getProfileXml = (id) => {
  return ApiService.get(`ProfileXml/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IProfileXml = {
        id: item.id,
        name: item.name,
        active: item.active
      };
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};

export { getProfilesXml, getProfileXml };

export type { IProfileXml };
