import AboutHero from "@/assets/images/about_hero.avif";
import BRMD1 from "@/assets/images/b_rmd_1.avif";
import BRMD2 from "@/assets/images/b_rmd_2.avif";
import BRMD3 from "@/assets/images/b_rmd_3.avif";
import BRMD4 from "@/assets/images/b_rmd_4.avif";
import BRMD5 from "@/assets/images/b_rmd_5.avif";
import BRMD6 from "@/assets/images/b_rmd_6.avif";
import BuyAndCollect from "@/assets/images/buy_collect.avif";
import CheckAvailability from "@/assets/images/check_availability.avif";
import Connected from "@/assets/images/connected.avif";
import Dashboard from "@/assets/images/dashboard.avif";
import DifferentSocialMedia from "@/assets/images/different_social_media.avif";
import ExpandReach from "@/assets/images/expand_reach.avif";
import FamiliarDesign from "@/assets/images/familiar_design.avif";
import ForPeopleHero from "@/assets/images/for_people_hero.avif";
import Growth from "@/assets/images/growth.avif";
import HeroDesktop from "@/assets/images/hero_desktop.avif";
import {
  default as HeroMobile,
  default as MobileAppMockup,
} from "@/assets/images/hero_mobile.avif";
import Stockholm from "@/assets/images/home/Stockholm.webp";
import Logistics from "@/assets/images/logistics.avif";
import MobileApp from "@/assets/images/mobile_app.avif";
import Neutral from "@/assets/images/neutral.avif";
import OfflineVendorHeroImage from "@/assets/images/offiline_hero.avif";
import OmniFeature from "@/assets/images/omni_feature.avif";
import Omnistore, {
  default as DeliveryTruck,
  default as InventoryManagement,
  default as POSSystem,
  default as ProductOnTable,
  default as ShippingLabel,
  default as StoreDashboard,
  default as VeskoStore,
} from "@/assets/images/omnistore.avif";
import MobileOnboard from "@/assets/images/onboarding_mob.avif";
import OnlineOrderFulfillment from "@/assets/images/online_order_fulfillment.avif";
import VeskoBg from "@/assets/images/online_vendor.webp";
import Onlinestore from "@/assets/images/onlinestore.avif";
import Payment from "@/assets/images/payment.avif";
import PointOfSaleSystem from "@/assets/images/point_of_sale_system.avif";
import SafePlace from "@/assets/images/safe_place.avif";
import Scalable from "@/assets/images/scalable.avif";
import SearchAndFind from "@/assets/images/search_find.avif";
import SpaceDigital from "@/assets/images/space_digital.avif";
import TRMD1 from "@/assets/images/t_rmd_1.avif";
import TRMD2 from "@/assets/images/t_rmd_2.avif";
import TRMD3 from "@/assets/images/t_rmd_3.avif";
import TRMD4 from "@/assets/images/t_rmd_4.avif";
import TRMD5 from "@/assets/images/t_rmd_5.avif";
import TRMD6 from "@/assets/images/t_rmd_6.avif";
import UnifiedInventory from "@/assets/images/unified_inventory.avif";
import VeskoBg1 from "@/assets/images/vesko_bg_split_1.webp";
import VeskoBg2 from "@/assets/images/vesko_bg_split_2.webp";
import VeskoBg3 from "@/assets/images/vesko_bg_split_3.webp";
import SpaceDigitalSecond from "@/assets/images/Vesko_dashboard_mobile.avif";
import YouFeelFree from "@/assets/images/you_feel_free.avif";
import VeskoLogo from "@/assets/logos/vesko.PNG";
import VeskoLogoLight from "@/assets/logos/vesko_light.PNG";
import VeskoLightIcon from "@/assets/logos/vesko_light.webp";
import VeskoVideo from "@/assets/videos/vesko.mp4";
import VeskoVideoMinos from "@/assets/videos/vesko_minos_video.webm";
// ForOfflineVendorPage assets - using existing images

export const Assets = {
  logo: VeskoLogo,
  logoLightIcon: VeskoLightIcon,
  logoLight: VeskoLogoLight,
  heroStockholm: Stockholm,
  heroMobile: HeroMobile,
  heroDesktop: HeroDesktop,
  spaceDigital: SpaceDigital,
  spaceDigitalSecond: SpaceDigitalSecond,
  veskoBg: VeskoBg,
  veskoBg1: VeskoBg1,
  veskoBg2: VeskoBg2,
  veskoBg3: VeskoBg3,
  safePlace: SafePlace,
  connected: Connected,
  neutral: Neutral,
  omnistore: Omnistore,
  onlinestore: Onlinestore,
  veskoVideo: VeskoVideo,
  veskoVideoMinos: VeskoVideoMinos,
  forPeopleHero: ForPeopleHero,
  youFeelFree: YouFeelFree,
  differentSocailMedia: DifferentSocialMedia,
  familiarDesign: FamiliarDesign,
  aboutHero: AboutHero,
  bRmd1: BRMD1,
  bRmd2: BRMD2,
  bRmd3: BRMD3,
  bRmd4: BRMD4,
  bRmd5: BRMD5,
  bRmd6: BRMD6,
  tRmd1: TRMD1,
  tRmd2: TRMD2,
  tRmd3: TRMD3,
  tRmd4: TRMD4,
  tRmd5: TRMD5,
  tRmd6: TRMD6,

  VeskoBg: VeskoBg,

  // ForOfflineVendorPage assets
  offlineVendorHeroImage: OfflineVendorHeroImage,
  productOnTable: ProductOnTable,
  inventoryManagement: InventoryManagement,
  veskoStore: VeskoStore,
  mobileAppMockup: MobileAppMockup,
  posSystem: POSSystem,
  shippingLabel: ShippingLabel,
  deliveryTruck: DeliveryTruck,
  storeDashboard: StoreDashboard,
  growth: Growth,
  unifiedInventory: UnifiedInventory,
  scalable: Scalable,
  expandReach: ExpandReach,
  omniFeature: OmniFeature,
  mobileOnboard: MobileOnboard,
  logistics: Logistics,
  payment: Payment,
  dashboard: Dashboard,
  mobileApp: MobileApp,
  onlineOrderFulfillment: OnlineOrderFulfillment,
  pointOfSaleSystem: PointOfSaleSystem,

  // For people
  searchAndFind: SearchAndFind,
  checkAvailablity: CheckAvailability,
  buyAndCollect: BuyAndCollect,
};

export type AssetKey = keyof typeof Assets;
