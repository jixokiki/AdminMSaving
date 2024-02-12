import React from 'react'
// import Navbar from '../platform/Navbar'
// import Layar from '../platform/Layar'
import bg from "../asset/plan.jpg"
import PlanMore from '../platform/PlanMore'
import NavbarHome2 from '../platform/NavbarHome2'
// import Layar from '../platform/Layar'
import Layar2 from '../platform/Layar2'
const Home2 = () => {
  return (
    <div>
        <NavbarHome2/>
        <Layar2
        dName="layar2"
        layarIMG={bg}
        titlle="M_SAVING"
        text="Choose Your Favorite PLan"
        buttonText="M-SAVING"
        url="/home"
        btnClass="show"
        />
        <PlanMore/>
    </div>
  )
}

export default Home2
