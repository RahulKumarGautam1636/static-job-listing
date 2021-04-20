import React from "react";
import Cards from "../components/cards.jsx";
import Owner from "../components/footer.jsx";

function OuterContainer() {
  return (
    <section className="outer_container">
      <div className="header"></div>
      <Cards />
      <Owner />
    </section>
  );
}
export default OuterContainer;
