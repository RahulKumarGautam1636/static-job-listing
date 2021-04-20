import React from "react";
import Cards from "../components/cards.jsx";
import Owner from "../components/footer.jsx";

function OuterContainer() {
  return (
    <div className="outer_container">
      <div className="header"></div>
      <Cards />
      <Owner />
    </div>
  );
}
export default OuterContainer;
