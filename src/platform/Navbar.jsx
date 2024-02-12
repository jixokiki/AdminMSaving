import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component{
    state = {clicked:false};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1  className="navbar-logo">M-SAVING</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return(
                        <li key={index}>
                            {/* <a className={item.cName} href="/"><i className={item.icon}></i>  {item.title}</a> */}
                            <Link className={item.cName} to={item.url}><i className={item.icon}></i>  {item.title}</Link>
                        </li>
                        )

                    //     <li key={index}>
                    //     {item.urls ? (
                    //       item.urls.map((url, subIndex) => (
                    //         <Link key={subIndex} className={item.cName} to={url}>
                    //           <i className={item.icon}></i> {item.title}
                    //         </Link>
                    //       ))
                    //     ) : (
                    //       <Link className={item.cName} to={item.url}>
                    //         <i className={item.icon}></i> {item.title}
                    //       </Link>
                    //     )}
                    //   </li>
                    })}
                    {/* <button>Sign Up</button> */}
                    {/* <li>
                        <Link className="nav-links" to="/home">
                            <i className="fas fa-house-user"></i> 
                        </Link>
                    </li> */}
                </ul>
            </nav>
        )
    }
}

export default Navbar;