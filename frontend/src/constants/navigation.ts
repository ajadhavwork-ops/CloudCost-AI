import {
  LayoutDashboard,
  DollarSign,
  Server,
  BrainCircuit,
  Bell,
  Wallet,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Analytics",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Cost Explorer",
        href: "/billing",
        icon: DollarSign,
      },
    ],
  },
  {
    title: "Cloud",
    items: [
      {
        title: "Resources",
        href: "/resources",
        icon: Server,
      },
      {
        title: "AI Insights",
        href: "/recommendations",
        icon: BrainCircuit,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Budgets",
        href: "/budgets",
        icon: Wallet,
      },
      {
        title: "Alerts",
        href: "/alerts",
        icon: Bell,
      },
    ],
  },
  {
    title: "General",
    items: [
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];