import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = () => {
  const navigate = useNavigate();
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    // Validate fields
    if (!formData.email || !formData.password) {
      alert("Please fill in all the fields before signing in.");
      return;
    }

    //Assume the user is logged in successfully
    alert("Logged in successfully!");

    // Redirect to the home page after successful login
    navigate("/");
  };

  const handleRegister = () => {
    // Validate fields
    if (!formData.email || !formData.password) {
      alert("Please fill in all the fields before registering.");
      return;
    }

    // Assume the user is registered successfully
    alert("Registered successfully!");

    // Redirect to the home page after successful registration
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MDBContainer>
      <MDBTabs>
        <MDBTabsItem>
          <MDBTabsLink show={justifyActive === "tab1"} onClick={() => setJustifyActive("tab1")}>
            Sign In?
          </MDBTabsLink>
        </MDBTabsItem>

        {/*Creating another tab which will be number 2 for registering note delete later, come back here if the registeration does not work*/}
        {/*Creating another tab for registeration is required in the brief*/}
        <MDBTabsItem>
          <MDBTabsLink show={justifyActive === "tab2"} onClick={() => setJustifyActive("tab2")}>
            Register?
          </MDBTabsLink>
        </MDBTabsItem>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
              <p className="text-center mt-3">or:</p>
            </div>
            <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" name="email" value={formData.email} onChange={handleChange} />
            <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" name="password" value={formData.password} onChange={handleChange} />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
              <a href="!#">Forgot password?</a>
            </div>
            <MDBBtn className="mb-4 w-100" onClick={handleSignIn}>
              Sign in
            </MDBBtn>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <div className="text-center mb-3">
              <p>Register with:</p>
              <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
              <p className="text-center mt-3">or:</p>
            </div>
            <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" name="email" value={formData.email} onChange={handleChange} />
            <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" name="password" value={formData.password} onChange={handleChange} />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
            </div>
            <MDBBtn className="mb-4 w-100" onClick={handleRegister}>
              Register
            </MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBTabs>
    </MDBContainer>
  );
};

export default Login;