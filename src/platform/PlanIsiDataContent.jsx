import React from 'react';
import "./Plan.css";
import { NavLink } from "react-router-dom";

// Using React.forwardRef to forward the ref to the underlying DOM element
const ProductIsiData2Content = React.forwardRef((props, ref) => {
  return (
    <div className="plan-newcard" ref={ref}>
      <div className="plan-newimage">
        <img src={props.img2} alt="image"/>
      </div>
      <h5>{props.heading}</h5>
      <p>{props.text}</p>
      {/* <nav>
          <NavLink exact="true" activeClassName="active" className="photoshoot-link" to="/planing">
              <button>open</button>
          </NavLink>
      </nav> */}
    </div>
  );
});

export default ProductIsiData2Content;
