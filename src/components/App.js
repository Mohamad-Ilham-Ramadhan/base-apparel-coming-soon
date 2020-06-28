import React from "react";
import Form from "./Form";

import ImgLogo from "../images/logo.svg";
import ImgHeroMobile from "../images/hero-mobile.jpg";

export default function App() {
  return (
    <>
      <header className="d-md-none">
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            <img
              src={ImgLogo}
              className="d-inline-block align-middle"
              alt=""
              loading="lazy"
            />
          </a>
        </nav>
      </header>
      <div className="row no-gutters">
        <div className="col-12 col-md-5 order-md-2">
          <div className="bg-hero h-100 w-100 d-none d-md-block"></div>
          <img className="w-100 d-md-none" src={ImgHeroMobile} alt="" />
        </div>
        <div className="col-12 col-md-7">
          <section className="main text-center text-md-left">
            <div className="main-bg"></div>
            <nav className="navbar d-none d-md-block pl-md-0">
              <a className="navbar-brand" href="#">
                <img
                  src={ImgLogo}
                  className="d-inline-block align-middle"
                  alt=""
                  loading="lazy"
                />
              </a>
            </nav>
            <h1 className="main-title text-uppercase mb-3 mb-md-4">
              <span className="text-secondary font-weight-light">we're</span>
              <br />
              <span className="text-dark-grayish-red font-weight-bold">
                coming soon
              </span>
            </h1>
            <p className="main-text text-secondary mb-4 mb-md-5">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to date with announcements
              and our launch deals.
            </p>
            <Form />
          </section>
        </div>
      </div>
    </>
  );
}
