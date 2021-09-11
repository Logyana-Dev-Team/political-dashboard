import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";

import CIcon from "@coreui/icons-react";
import "./custom.css";
import { NavLink } from "react-router-dom";
import contact from "../assets/icons/contact.png";
import job from "../assets/icons/job.png";
import writing from "../assets/icons/writing.png";
import charity from "../assets/icons/charity.png";
import notification from "../assets/icons/notification.png";
import information from "../assets/icons/information.png";
import aamchekarya from "../assets/icons/aamchekarya.png";
import user from "../assets/icons/user.png";
import gallery from "../assets/icons/gallery.png";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
      style={{ backgroundColor: "red" }}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        Admin Dashboard
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav
        className="sidebar-list"
        style={{
          backgroundColor: "#fff",
          paddingVertical: "10px",
          borderRightWidth: "10px",
          borderRightColor: "black",
        }}
      >
        {/* <div  id='nav-element-list'>
          <CCreateElement
            items={navigation}
            components={{
              CSidebarNavDivider,
              CSidebarNavDropdown,
              CSidebarNavItem,
              CSidebarNavTitle,
            }}
          />
        </div> */}
        <NavLink
          to="/yojana"
          className=" p-3 my-0 mt-1 mx-1 d-flex justify-content-lg-start hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={charity}
            width="20px"
            height="20px"
            className="mr-3"
            alt="alt"
          />
          <div className="ml-3">शासकीय योजना</div>
        </NavLink>
        <NavLink
          to="/suchana"
          className=" p-3 my-0 mx-1  d-flex justify-content-lg-start hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={notification}
            width="21px"
            height="21px"
            className="mr-3"
            alt="alt"
          />
          <div className="ml-3">नागरिकांसाठी सूचना</div>
        </NavLink>
        <NavLink
          to="/takrar"
          className=" p-3 my-0 mx-1  d-flex justify-content-lg-start  hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={writing}
            width="21px"
            height="21px"
            className="mr-3"
            alt="alt"
          />
          <div className="ml-3">तक्रार/प्रस्ताव</div>
        </NavLink>
        <NavLink
          to="/takrarNivaran"
          className=" p-3 my-0 mx-1  d-flex justify-content-lg-start  hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={writing}
            width="21px"
            height="21px"
            className="mr-3"
            alt="alt"
          />
          <div className="ml-3">तक्रार निवारण</div>
        </NavLink>
        <NavLink
          to="/aamchekarya"
          className=" px-2 py-3 my-0 mx-1  d-flex justify-content-lg-start hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={aamchekarya}
            width="30px"
            height="30px"
            className="mr-1"
            alt="alt"
          />
          <div className="ml-4">आमचे कार्य</div>
        </NavLink>
        <NavLink
          to="/aamchimahiti"
          className=" p-3 my-0 mx-1  d-flex justify-content-lg-start hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={information}
            width="21px"
            height="21px"
            className="mr-3"
            alt="alt"
          />
          <div className="ml-3">आमची माहिती</div>
        </NavLink>
        <NavLink
          to="/sampark"
          className=" p-3 my-0 mx-1  d-flex justify-content-lg-start hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={contact}
            width="21px"
            height="21px"
            className="mr-3"
            alt="alt"
          />
          <div className="ml-3">संपर्क संदेश</div>
        </NavLink>
        <NavLink
          to="/users"
          className=" p-3 my-0 mx-1  d-flex justify-content-start  align-items-center hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={user}
            width="21px"
            height="21px"
            className="mr-3"
            alt="alt"
          />

          <div className="ml-3">युजर्स</div>
        </NavLink>
        <NavLink
          to="/gallery"
          className=" p-3 my-0 mx-1  d-flex justify-content-start  align-items-center hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={gallery}
            width="21px"
            height="21px"
            className="mr-3"
            alt="alt"
          />
          <div className="ml-3">गॅलरी</div>
        </NavLink>
        <NavLink
          to="/jobs"
          className=" p-3 my-0 mx-1  d-flex justify-content-start  align-items-center hoverr"
          style={{ color: "#000", textDecoration: "none" }}
          activeClassName="active"
        >
          <img
            src={job}
            width="21px"
            height="21px"
            className="mr-3"
            alt="alt"
          />
          <div className="ml-3">नौकरी</div>
        </NavLink>
      </CSidebarNav>
      {/* <CSidebarMinimizer className="c-d-md-down-none"/> */}
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
