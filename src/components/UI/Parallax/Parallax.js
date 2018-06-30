import React from "react";

import TypedText from "../TypedText/TypedText";

import "./Parallax.css";

const Parallax = () => {
  return (
    <div className="Parallax">
      <div className="Caption">
        <TypedText strings={["Manage your expenses smartly"]} />
      </div>
    </div>
  );
};
export default Parallax;
