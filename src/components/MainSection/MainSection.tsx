import "./MainSection.css";
import React from "react";

function MainSection({ children }: Children) {
  return (
    <main>
      <div className="main-section">{children}</div>
    </main>
  );
}

export default MainSection;
