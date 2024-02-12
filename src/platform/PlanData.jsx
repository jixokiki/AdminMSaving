import "./Plan.css";
import { NavLink } from "react-router-dom";
function ProductData(props){
    return(
        <div className="plan-card">
            <div className="plan-image">
                <img src={props.img1} alt="image"/>
            </div>
            <h5>{props.heading}</h5>
            <p>{props.text}</p>
            <nav>
                <NavLink exact="true" activeclassname="active" className="photoshoot-link" to="/">
                    <button>Clicked Here</button>
                </NavLink>
            </nav>            
        </div>

    );
}

export default ProductData;