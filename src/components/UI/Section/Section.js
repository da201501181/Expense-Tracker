import React from "react";

const Section = props => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className={props.classname_img}>
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={props.image}
                  alt=""
                />
              </div>
            </div>
            <div className={props.classname_text}>
              <div className="p-5">
                <h2 className="display-4">{props.heading}</h2>
                <p>{props.para}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Section;
