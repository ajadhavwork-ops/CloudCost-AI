import {
  DollarSign,
  Server,
  PiggyBank,
  Wallet,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Total Cloud Spend",
    value: "$12,481",
    change: "+8.2%",
    description: "Compared to last month",
    icon: DollarSign,
  },
  {
    title: "Active Resources",
    value: "1,284",
    change: "+12",
    description: "Currently running",
    icon: Server,
  },
  {
    title: "Estimated Savings",
    value: "$2,314",
    change: "+14%",
    description: "Optimization opportunities",
    icon: PiggyBank,
  },
  {
    title: "Budget Usage",
    value: "82%",
    change: "Within Limit",
    description: "Current monthly budget",
    icon: Wallet,
  },
];