import { FaChartPie, FaList } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";

export const navigationList = [
  { text: "Dashboard", icon: <FaChartPie />, path: "/" },
  { text: "New Account", icon: <FaClipboardUser />, path: "/account" },
  { text: "Account List", icon: <FaList />, path: "/accountList" },
];
