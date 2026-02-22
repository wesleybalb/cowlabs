export default function NavLink({ href, children }) {
  return (
    <>
      <li className="nav-item">
        <a href={href} className="nav-link text-white px-2">
          {children}
        </a>
      </li>
    </>
  );
}
// import React from "react";
// import PropTypes from "prop-types";
// NavLink.propTypes = {
//   href: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
