import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const [toggle, setToggle] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onsubmit = () => {
    // console.log(email, password);
    axios
      .post("/admin/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
        window.location = "/";
      })
      .catch((err) => {
        alert("Wrong username or password");
      });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login Admin</h1>
                    {/* <p className="text-muted">Sign In to your account</p> */}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type={toggle ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <FontAwesomeIcon
                            icon={faEye}
                            className=" hoverr-icon-view mx-1"
                            onClick={() => setToggle(!toggle)}
                          />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        {/* <Link to="/"> */}
                        <CButton
                          color="primary"
                          onClick={() => onsubmit()}
                          className="px-4"
                        >
                          Login
                        </CButton>
                        {/* </Link> */}
                      </CCol>

                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
