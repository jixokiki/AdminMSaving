import "./Layar.css";

function Layar(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="layarimg" src={props.layarIMG} />
            <div className="layar-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
        </>
    );
}

export default Layar;
// // Layar.js
// import React from 'react';

// const Layar = ({ dName, layarIMG, titlle, text, buttonText, url, btnClass }) => {
//   return (
//     <div className={dName}>
//       <img src={layarIMG} alt="background" />
//       <div className="content">
//         <h1>{titlle}</h1>
//         <p>{text}</p>
//         <button className={btnClass} onClick={() => window.location.href = url}>
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Layar;
