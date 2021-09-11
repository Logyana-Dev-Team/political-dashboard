import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "योजना",
    to: "/yojana",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "सुचना",
    to: "/suchana",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "तक्रार/प्रस्ताव",
    to: "/takrar",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavItem",
    name: "आमचे कार्य",
    to: "/aamchekarya",
    icon: "cil-puzzle",
  },
  {
    _tag: "CSidebarNavItem",
    name: "AamchiMahiti",
    to: "/aamchimahiti",
    icon: "cil-chart-pie",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Sampark",
    to: "/sampark",
    icon: "cil-bell",
  },
];

export default _nav;
