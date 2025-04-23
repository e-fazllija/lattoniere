import ApiService from "@/core/services/ApiService";

interface IModuleXml {
  id: number;
  customer?: string;
  materialName?: string;
  nameXmlOpera?: string;
  name?: string;
  dx: string;
  da: string;
  nRip: string;
  dxRip: string;
  roundDx: boolean;
  ceilDx: boolean;
  roundDa: boolean;
  ceilDa: boolean;
  roundNRip: boolean;
  ceilNRip: boolean;
  roundDxRip: boolean;
  ceilDxRip: boolean;
  deltaX?: string;
  avanzamentoDeltaX?: string;
  loopCutIdCode: boolean;
  byCustomer: boolean;
  byMaterial: boolean;
  cutNameStart?;
  cutNameEnd?;
  from?: string;
  to?: string;
  byRange: boolean;
  materialColor?: string;
  byMaterialColor: boolean;
  model?: string;
  byModel: boolean;
}

const emptyModuleXml: IModuleXml = {
  id: 0,
  customer: "",
  materialName: "",
  nameXmlOpera: "",
  name: "",
  dx: "0",
  da: "0",
  nRip: "0",
  dxRip: "0",
  roundDx: false,
  ceilDx: false,
  roundDa: false,
  ceilDa: false,
  roundNRip: false,
  ceilNRip: false,
  roundDxRip: false,
  ceilDxRip: false,
  deltaX: "",
  avanzamentoDeltaX: "",
  loopCutIdCode: false,
  byCustomer: false,
  byMaterial: false,
  cutNameStart: "",
  cutNameEnd: "",
  from: "",
  to: "",
  byRange: false,
  materialColor: "",
  byMaterialColor: false,
  model: "",
  byModel: false,
};

const getModulesXml = (filterRequest: string) => {
    return ApiService.get(
      `ModuleXml/Get?currentPage=0&filterRequest=${filterRequest}`,
      ""
    )
      .then(({ data }) => {
        const results: Array<IModuleXml> = data.data;
        return results;
      })
      .catch(({ response }) => {
        console.log(response);
        return [];
      });
  };
  
  const getModuleXml = (id) => {
    return ApiService.get(`ModuleXml/GetById?id=${id}`, "")
      .then(({ data }) => {
        const result: IModuleXml = data;
        return result;
      })
      .catch(({ response }) => {
        console.log(response);
        return undefined;
      });
  };
  
  export { getModulesXml, getModuleXml, emptyModuleXml };
  
  export type { IModuleXml };