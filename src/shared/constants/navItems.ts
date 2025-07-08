import type { NavigationItem } from "@/layouts/navigation.types";

export const NAV_ITEMS: NavigationItem[] = [
  {
    id: "home",
    label: "nav.home",
    routeKey: "home",
  },
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
  {
    id: "about",
    label: "nav.about",
    routeKey: "about",
  },
  { id: "people", label: "nav.people", routeKey: "people" },
  {
    id: "contact",
    label: "nav.contact",
    routeKey: "contact",
  },
];
