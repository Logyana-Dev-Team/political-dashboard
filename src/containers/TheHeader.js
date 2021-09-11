import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CLink,
  CButton,
} from "@coreui/react";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const onLogout = () => {
    // alert("logged out")
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    window.location = "/#/login";
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CLink
          className="c-subheader-nav-link"
          href="#"
          style={{ position: "absolute", right: "20px" }}
        >
          <CButton color="primary" onClick={() => onLogout()} className="px-4">
            Log Out
          </CButton>
        </CLink>
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
