import {
  LayoutGrid,
  Package,
  Percent,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";

export const sidebarContent = [
  { slug: "categories", title: "الاقسام", icon: <LayoutGrid /> },
  { slug: "brands", title: "العلامات التجارية", icon: <ShoppingBag /> },
  { slug: "coupons", title: "الكوبونات", icon: <Percent /> },
  { slug: "users", title: " المستخدمين ", icon: <Users /> },
  { slug: "orders", title: "الطلبات", icon: <Package /> },
  { slug: "settings", title: "الاعدادات", icon: <Settings /> },
];
