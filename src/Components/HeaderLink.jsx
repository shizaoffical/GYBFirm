import React from "react";
import { Link } from "react-router-dom";
function HeaderLink(props) {
  return (
    <Link to={props.path} onClick={props.onClick}>
   <div className={`header-link ${props.headerlink2}`}>
      <i class="fa-solid fa-arrow-right header-link-arrow"></i>
      <p className="header-link-text">{props.text}</p>
      </div>
    </Link>
  );
}

export default HeaderLink;
