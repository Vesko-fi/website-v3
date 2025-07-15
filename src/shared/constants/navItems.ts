import type { NavigationItem } from "@/layouts/navigation.types";

export const NAV_ITEMS: NavigationItem[] = [
  {
    id: "offline-vendors",
    label: "nav.offline-vendors",
    routeKey: "offlineVendors",
  },
  {
    id: "online-vendors",
    label: "nav.online-vendors",
    routeKey: "onlineVendors",
  },

  { id: "people", label: "nav.people", routeKey: "people" },
  {
    id: "payment",
    label: "nav.payment",
    routeKey: "paymentLogistic",
  },
  {
    id: "logistic",
    label: "nav.logistic",
    routeKey: "paymentLogistic",
  },
];

export const COMPANY_NAV_ITEMS: NavigationItem[] = [
  {
    id: "home",
    label: "nav.home",
    routeKey: "home",
  },
  {
    id: "about",
    label: "nav.about",
    routeKey: "about",
  },
  {
    id: "contact",
    label: "nav.contact",
    routeKey: "contact",
  },
];
