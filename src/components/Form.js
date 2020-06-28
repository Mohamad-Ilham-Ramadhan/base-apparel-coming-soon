import React from "react";

import ImgIconError from "../images/icon-error.svg";
import ImgIconArrow from "../images/icon-arrow.svg";

export default function Form() {
  function handleSubmit(e) {
    const form = e.target;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add("was-validated");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="main-form needs-validation"
      id="theform"
      noValidate
    >
      <div className="form-group position-relative">
        <input
          className="form-control rounded-pill"
          type="email"
          placeholder="Email Address"
          required
        />
        <img
          className="invalid-icon invalid-feedback"
          src={ImgIconError}
          alt=""
        />
        <div className="invalid-feedback">Please provide a valid email</div>
        <button
          className="btn btn-submit btn-primary-gradient rounded-pill"
          type="submit"
        >
          <img src={ImgIconArrow} alt="" />
        </button>
      </div>
    </form>
  );
}
