import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems2 } from "./MenuItems2";

class NavbarHome2 extends Component{
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
                    {MenuItems2.map((item2, index)=>(
                        // return(
                        // <li key={index}>
                        //     {/* <a className={item.cName} href="/"><i className={item.icon}></i>  {item.title}</a> */}
                        //     <Link className={item.linkName} to={item.url}><i className={item.icon}></i>  {item.title}</Link>
                        // </li>
                        // )

                        <li key={index}>
                        {item2.urls ? (
                          item2.urls.map((url, subIndex) => (
                            <Link key={subIndex} className={item2.linkName} to={url}>
                              <i className={item2.icon}></i> {item2.title2}
                            </Link>
                          ))
                        ) : (
                          <Link className={item2.linkName} to={item2.url}>
                            <i className={item2.icon}></i> {item2.title2}
                          </Link>
                        )}
                      </li>
                    ))}
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

export default NavbarHome2;