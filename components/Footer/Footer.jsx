import React from "react";

const Footer = () => {
  return (
    <footer className=" p-10 bg-base-200 ">
      <div className="footer p-0 m-0 sm:w-[1440px] mx-auto text-base-content flex flex-wrap sm:flex-justify justify-between sm:p-20">
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">
            Cycle Repair
          </a>
          <a href="/" className="link link-hover">
            Cycle Maintanence
          </a>
          <a href="/" className="link link-hover">
            Cycle Repair
          </a>
          <a href="/" className="link link-hover">
            Cycle Uninstallation
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/" className="link link-hover">
            About us
          </a>
          <a href="/" className="link link-hover">
            Contact
          </a>
          <a href="/" className="link link-hover">
            Jobs
          </a>
          <a href="/" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">
            Terms of use
          </a>
          <a href="/" className="link link-hover">
            Privacy policy
          </a>
          <a href="/" className="link link-hover">
            Cookie policy
          </a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
