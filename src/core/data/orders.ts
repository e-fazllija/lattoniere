import ApiService from "@/core/services/ApiService";

interface IOrder {
  id: number;
  job_id: String;
  job_name: String;
  cst_name: String;
  cst_code: String;
}

const getOrders = (filterRequest: string) => {
  return ApiService.get(
    `Orders/Get?currentPage=0&filterRequest=${filterRequest}`,
    ""
  )
    .then(({ data }) => {
      const results: Array<IOrder> = data.data.map((item) => ({
        id: item.id,
        job_id: item.job?.job_id,
        job_name: item.job?.job_name,
        cst_name: item.job?.operaJobCustomer?.cst_name,
        cst_code: item.job?.operaJobCustomer?.cst_code,
      }));
      return results;
    })
    .catch(({ response }) => {
      console.log(response);
      return [];
    });
};

const getOrder = (id) => {
  return ApiService.get(`Accessories/GetById?id=${id}`, "")
    .then(({ data }) => {
      const item = data;
      const result: IOrder = {
        id: item.id,
        job_id: item.job?.job_id,
        job_name: item.job?.job_name,
        cst_name: item.job?.operaJobCustomer?.cst_name,
        cst_code: item.job?.operaJobCustomer?.cst_code,
      };
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};

export { getOrders, getOrder };

export type { IOrder };
