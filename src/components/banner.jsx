import logo from "../assets/facet.jpg";
import {logoClass} from "./banner.module.css";

const inlineStyles = {
    color: "red",
    fontSize: "24px",
}
const Banner = (props) => {
    return (
        <header className="row">
            <div className="col-4">
                {/* form src */}
                <img src={logo} className={logoClass} alt="logo"></img>
            </div>
           <div className="col-4" style={inlineStyles}>
               {props.text}
           </div>
           <div className="col-4">
               {/* from global assets */}
           <img src="./vite.svg" alt="logo"></img>
           </div>
        </header>
    )
}

export default Banner;