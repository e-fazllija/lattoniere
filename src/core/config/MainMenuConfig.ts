export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Commesse",
        route: "/orders/list",
        keenthemesIcon: "tablet-text-down",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        sectionTitle: "Anagrafiche",
        route: "/pages",
        keenthemesIcon: "element-plus",
        bootstrapIcon: "bi-archive",
        sub: [
          {
            heading: "Clienti",
            route: "/registries/customers/list",
          },
          {
            heading: "Accessori",
            route: "/registries/accessories/list",
          },
          {
            heading: "Fornitori",
            route: "/registries/suppliers/list",
          },
          {
            heading: "Materiali",
            route: "/registries/materials/list",
          },
          {
            heading: "Profili",
            route: "/registries/profiles/list",
          },
        ],
      },
      {
        sectionTitle: "Magazzino",
        route: "/pages",
        keenthemesIcon: "cube-2",
        bootstrapIcon: "bi-archive",
        sub: [
          {
            heading: "Giacenza",
            route: "/warehouse/stocks/list",
          },
          {
            heading: "Entrata merci",
            route: "/warehouse/goods-receipt/list",
          }
        ],
      },
      // {
      //   heading: "DDT",
      //   route: "/transport-documents/list",
      //   keenthemesIcon: "element-11",
      //   bootstrapIcon: "bi-app-indicator",
      // },
    ],
  },
  {
    heading: "impostazioni",
    route: "/settings",
    pages: [
      {
        sectionTitle: "Xml",
        route: "/xmlSettings",
        keenthemesIcon: "setting-2",
        bootstrapIcon: "bi bi-gear",
        sub: [
          {
            heading: "Moduli",
            route: "/settings/modulesXml/list",
          },
          {
            heading: "Marcature",
            route: "/settings/markings/list",
          },
          {
            heading: "Profili per Xml",
            route: "/settings/profilesXml/list",
          },
        ],
      },
      {
        sectionTitle: "Tipologie",
        route: "/tpologies",
        keenthemesIcon: "element-plus",
        bootstrapIcon: "bi-gear",
        sub: [
          {
            heading: "Tipologie accessori",
            route: "/registries/typologies/accessory-type/list",
          },
          {
            heading: "Tipologie clienti",
            route: "/registries/typologies/customer-type/list",
          },
          {
            heading: "Modalità di consegna",
            route: "/registries/typologies/delivery-type/list",
          },
          {
            heading: "Tipologie entrata merci",
            route: "/registries/typologies/good-receipt-type/list",
          },
          {
            heading: "Tipologie materiali",
            route: "/registries/typologies/material-type/list",
          },
          {
            heading: "Modalità di pagamento",
            route: "/registries/typologies/payment-type/list",
          },
          {
            heading: "Tipologie profili",
            route: "/registries/typologies/profile-type/list",
          },
        ],
      }
    ],
  }
];

export default MainMenuConfig;
