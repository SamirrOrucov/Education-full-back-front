import React from "react";
import "./Footer.scss"
function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </p>
        <div className="icons">
          <button>
            <i class="fa-brands fa-facebook-f"></i>
          </button>
          <button>
            <i class="fa-brands fa-twitter"></i>
          </button>
          <button>
            <i class="fa-solid fa-basketball"></i>
          </button>
          <button>
            <i class="fa-brands fa-behance"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
