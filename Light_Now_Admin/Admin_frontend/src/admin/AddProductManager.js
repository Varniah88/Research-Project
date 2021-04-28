import React, { useState } from "react";
import Layout from "../core/Layout";
import { signup } from "../auth";
import Noty from "noty";

import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/mint.css";

const AddProductManager = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    error: "",
    success: false,
  });

  const { name, email, role, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, role, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          role: "",
          password: "",
          error: "",
          success: true,
        });

        new Noty({
          type: "success",
          layout: "topRight",
          text: "Mail Sent to Store Manager",
          timeout: 3000,
        }).show();
      }
    });
  };

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Role</label>
        <select onChange={handleChange("role")} className="form-control">
          <option value={0}>User</option>
          <option value={1}>Admin</option>
          <option value={2}>Store Manager</option>
        </select>
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New Product Manager account is created.
    </div>
  );

  return (
    <Layout
      title="Signup"
      description="Signup to Node React E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      <div style={{ marginTop: "30px" }}>
        {showSuccess()}
        {showError()}
        {signUpForm()}
      </div>
    </Layout>
  );
};

export default AddProductManager;
