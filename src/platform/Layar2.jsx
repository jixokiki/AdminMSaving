import "./Layar.css";

function Layar2(props){
    return(
        <>
        <div className={props.linkName}>
            <img alt="layarimg" src={props.layarIMG} />
            <div className="layar-text">
                <h1>{props.title2}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
        </>
    );
}

export default Layar2;