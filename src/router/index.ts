import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/builder",
        name: "builder",
        component: () => import("@/views/LayoutBuilder.vue"),
        meta: {
          pageTitle: "Layout Builder",
          breadcrumbs: ["Layout"],
        },
      },
      {
        path: "/orders/list",
        name: "orders-list",
        component: () => import("@/views/orders/list.vue"),
        meta: {
          pageTitle: "Lista commesse",
          breadcrumbs: ["Apps", "Commesse"],
        },
      },
      {
        path: "/registries/customers/list",
        name: "customers-list",
        component: () => import("@/views/registries/customers/List.vue"),
        meta: {
          pageTitle: "Lista clienti",
          breadcrumbs: ["Apps", "Clienti"],
        },
      },
      {
        path: "/registries/customers/update/:id",
        name: "update-customer",
        component: () => import("@/views/registries/customers/Update.vue"),
        meta: {
          pageTitle: "Dettagli cliente",
          breadcrumbs: ["Apps", "Clienti"],
        },
      },
      {
        path: "/registries/accessories/list",
        name: "accessories-list",
        component: () => import("@/views/registries/accessories/List.vue"),
        meta: {
          pageTitle: "Lista accessori",
          breadcrumbs: ["Apps", "Accessori"],
        },
      },
      {
        path: "/registries/accessories/update/:id",
        name: "update-accessory",
        component: () => import("@/views/registries/accessories/Update.vue"),
        meta: {
          pageTitle: "Dettagli accessorio",
          breadcrumbs: ["Apps", "Accessori"],
        },
      },
      {
        path: "/registries/profiles/list",
        name: "profiles-list",
        component: () => import("@/views/registries/profiles/List.vue"),
        meta: {
          pageTitle: "Lista profili",
          breadcrumbs: ["Apps", "Profili"],
        },
      },
      {
        path: "/registries/profiles/update/:id",
        name: "update-profile",
        component: () => import("@/views/registries/profiles/Update.vue"),
        meta: {
          pageTitle: "Dettagli profilo",
          breadcrumbs: ["Apps", "Profili"],
        },
      },
      {
        path: "/registries/suppliers/list",
        name: "suppliers-list",
        component: () => import("@/views/registries/suppliers/list.vue"),
        meta: {
          pageTitle: "Lista fornitori",
          breadcrumbs: ["Apps", "Fornitori"],
        },
      }, 
      {
        path: "/registries/suppliers/update/:id",
        name: "update-supplier",
        component: () => import("@/views/registries/suppliers/update.vue"),
        meta: {
          pageTitle: "Dettagli fornitore",
          breadcrumbs: ["Apps", "Fornitori"],
        },
      },
      {
        path: "/registries/materials/list",
        name: "materials-list",
        component: () => import("@/views/registries/materials/List.vue"),
        meta: {
          pageTitle: "Lista materiali",
          breadcrumbs: ["Apps", "Materiali"],
        },
      },
      {
        path: "/registries/materials/update/:id",
        name: "update-material",
        component: () => import("@/views/registries/materials/Update.vue"),
        meta: {
          pageTitle: "Dettagli materiale",
          breadcrumbs: ["Apps", "Materiali"],
        },
      },
      {
        path: "/settings/modulesXml/list",
        name: "modules-xml-list",
        component: () => import("@/views/settings/modulesXml/List.vue"),
        meta: {
          pageTitle: "Lista moduli",
          breadcrumbs: ["Apps", "Moduli"],
        },
      },
      {
        path: "/settings/modulesXml/update/:id",
        name: "update-module-xml",
        component: () => import("@/views/settings/modulesXml/Update.vue"),
        meta: {
          pageTitle: "Dettagli modulo",
          breadcrumbs: ["Apps", "Moduli"],
        },
      },
      {
        path: "/settings/markings/list",
        name: "markings-list",
        component: () => import("@/views/settings/markings/List.vue"),
        meta: {
          pageTitle: "Lista marcature",
          breadcrumbs: ["Apps", "Marcature"],
        },
      },
      {
        path: "/settings/markings/update/:id",
        name: "update-marking",
        component: () => import("@/views/settings/markings/Update.vue"),
        meta: {
          pageTitle: "Dettagli marcatura",
          breadcrumbs: ["Apps", "Marcature"],
        },
      },
      {
        path: "/settings/profilesXml/list",
        name: "profiles-xml-list",
        component: () => import("@/views/settings/profilesXml/List.vue"),
        meta: {
          pageTitle: "Lista profili xml",
          breadcrumbs: ["Apps", "Profili xml"],
        },
      },
      {
        path: "/registries/typologies/accessory-type/list",
        name: "accessory-typologies-list",
        component: () => import("@/views/registries/typologies/accessory-type/List.vue"),
        meta: {
          pageTitle: "Lista tipologie accessori",
          breadcrumbs: ["Apps", "Tipologie accessori"],
        },
      },
      {
        path: "/registries/typologies/customer-type/list",
        name: "customer-typologies-list",
        component: () => import("@/views/registries/typologies/customer-type/List.vue"),
        meta: {
          pageTitle: "Lista tipologie clienti",
          breadcrumbs: ["Apps", "Tipologie clienti"],
        },
      },
      {
        path: "/registries/typologies/delivery-type/list",
        name: "delivery-typologies-list",
        component: () => import("@/views/registries/typologies/delivery-type/List.vue"),
        meta: {
          pageTitle: "Lista modalità di consegna",
          breadcrumbs: ["Apps", "Modalità di consegna"],
        },
      },
      {
        path: "/registries/typologies/good-receipt-type/list",
        name: "good-receipt-typologies-list",
        component: () => import("@/views/registries/typologies/good-receipt-type/List.vue"),
        meta: {
          pageTitle: "Lista tipologie entrata merce",
          breadcrumbs: ["Apps", "Tipologie entrata merce"],
        },
      },
      {
        path: "/registries/typologies/material-type/list",
        name: "material-typologies-list",
        component: () => import("@/views/registries/typologies/material-type/List.vue"),
        meta: {
          pageTitle: "Lista tipologie materiali",
          breadcrumbs: ["Apps", "Tipologie materiali"],
        },
      },
      {
        path: "/registries/typologies/payment-type/list",
        name: "payment-typologies-list",
        component: () => import("@/views/registries/typologies/payment-type/List.vue"),
        meta: {
          pageTitle: "Lista tipologie pagamento",
          breadcrumbs: ["Apps", "Tipologie pagamento"],
        },
      },
      {
        path: "/registries/typologies/profile-type/list",
        name: "profile-typologies-list",
        component: () => import("@/views/registries/typologies/profile-type/List.vue"),
        meta: {
          pageTitle: "Lista tipologie profili",
          breadcrumbs: ["Apps", "Tipologie profili"],
        },
      },
      {
        path: "/warehouse/goods-receipt/list",
        name: "goods-receipt-list",
        component: () => import("@/views/warehouse/goods-receipt/list.vue"),
        meta: {
          pageTitle: "Lista entrata merci",
          breadcrumbs: ["Apps", "Magazzino"],
        },
      },
      {
        path: "/warehouse/goods-receipt/update/:id",
        name: "update-good-receipt",
        component: () => import("@/views/warehouse/goods-receipt/update.vue"),
        meta: {
          pageTitle: "Entrata merci",
          breadcrumbs: ["Apps", "Magazzino"],
        },
      },
      {
        path: "/warehouse/stocks/list",
        name: "stocks-list",
        component: () => import("@/views/warehouse/stocks/list.vue"),
        meta: {
          pageTitle: "Giacenza",
          breadcrumbs: ["Apps", "Magazzino"],
        },
      },
      {
        path: "/transport-documents/list",
        name: "transport-documents-list",
        component: () => import("@/views/transport-documents/list.vue"),
        meta: {
          pageTitle: "Lista documenti di trasporto",
          breadcrumbs: ["Apps", "DDT"],
        },
      }
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
        meta: {
          pageTitle: "Sign Up",
        },
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
