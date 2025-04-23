import ApiService from "@/core/services/ApiService";

interface IGoodReceiptType {
  id: number;
  name: string;
}

const getGoodReceiptTypes = (filterRequest: string) => {
  return ApiService.get(`GoodReceiptType/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IGoodReceiptType> = data.data.map(item => ({
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

const getGoodReceiptType = (id) => {
  return ApiService.get(`GoodReceiptType/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IGoodReceiptType = {
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


export { getGoodReceiptTypes, getGoodReceiptType };

export type { IGoodReceiptType };