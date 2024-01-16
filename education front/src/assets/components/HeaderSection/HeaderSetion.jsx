import React from "react";
import "./HeaderSection.scss";
function HeaderSetion() {
  return (
    <div className="header">
      <div className="header_container">
        <h5>We Rank the Best Courses on the Web</h5>
        <p>
          In the history of modern astronomy, there is probably no one greater
          leap forward than the building and launch of the space telescope.
        </p>
        <div className="input">
          <input type="text" name="" id="" placeholder="Search.." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSetion;
