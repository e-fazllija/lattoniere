import ApiService from "@/core/services/ApiService";

interface IMarking {
  id: number;
  materialName?: string;
  idFac?: string;
  dx?: string;
  dy?: string;
  lung?: string;
  larg?: string;
  str?: string;
  from?: string;
  to?: string;
}

const emptyMarking: IMarking = {
  id: 0,
  materialName: "",
  idFac: "0",
  dx:  "0",
  dy:  "0",
  lung:  "0",
  larg:  "0",
  str:  "0",
  from:  "",
  to:  ""
};

const getMarkings = (filterRequest: string) => {
    return ApiService.get(
      `Marking/Get?currentPage=0&filterRequest=${filterRequest}`,
      ""
    )
      .then(({ data }) => {
        const results: Array<IMarking> = data.data;
        return results;
      })
      .catch(({ response }) => {
        console.log(response);
        return [];
      });
  };
  
  const getMarking = (id) => {
    return ApiService.get(`Marking/GetById?id=${id}`, "")
      .then(({ data }) => {
        const result: IMarking = data;
        return result;
      })
      .catch(({ response }) => {
        console.log(response);
        return undefined;
      });
  };
  
  export { getMarkings, getMarking, emptyMarking };
  
  export type { IMarking };