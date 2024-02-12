import "./Plan.css";
import { NavLink } from "react-router-dom";
function ProductIsiData2(props){
    return(
        <div className="plan-card">
            <div className="plan-image">
                <img src={props.img2} alt="image"/>
            </div>
            <h5>{props.heading}</h5>
            <p>{props.text}</p>
            <nav>
                <NavLink exact="true" activeclassname="active" className="photoshoot-link" to="/planing">
                    <button>open</button>
                </NavLink>
            </nav>            
        </div>

    );
}

export default ProductIsiData2;