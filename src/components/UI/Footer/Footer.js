import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <div className="container-fluid bg-primary py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <p className=" text-white">
                  {" "}
                  <strong>Copyright © 2018</strong>
                </p>
              </div>
              <div className="col-md-5">
                <div
                  style={{
                    marginBottom: "10px",
                    color: "#fff",
                    marginLeft: "10px"
                  }}
                >
                  <strong>Developed by Priyam Vora</strong>
                </div>
                <div className="d-inline-block">
                  <div
                    className="bg-circle-outline d-inline-block"
                    style={{ backgroundColor: "#3b5998" }}
                  >
                    <a
                      href="https://www.facebook.com/priyam.vora.16"
                      target="_blank"
                    >
                      <i className="fa fa-2x fa-fw fa-facebook text-white" />
                    </a>
                  </div>

                  <div
                    className="bg-circle-outline d-inline-block"
                    style={{ backgroundColor: "#0077B5" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/priyam-vora/"
                      target="_blank"
                    >
                      <i className="fa fa-2x fa-fw fa-linkedin text-white" />
                    </a>
                  </div>
                  <div
                    className="bg-circle-outline d-inline-block"
                    style={{ backgroundColor: "#333" }}
                  >
                    <a href="https://github.com/da201501181" target="_blank">
                      <i className="fa fa-2x fa-fw fa-github text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
