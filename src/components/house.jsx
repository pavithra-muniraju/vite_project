import { useContext } from "react";
import navigationContext from "../navigation/navigationContext";
import navValues from "../navigation/navValues";
import Bids from "./bids";


const House = () => {
    const {parm: house} = useContext(navigationContext)
    if (!house) return <div>No house data provided.</div>;

    const {navigate} = useContext(navigationContext)
    return (
        <div>
            <button className="btn btn-primary" onClick={()=> navigate(navValues.home)}>Back to HouseList</button>
            <h2>{house.country}</h2>
            <p><strong>Address:</strong> {house.address}</p>
            <p><strong>Price:</strong> {house.price}</p>
            <p><strong>Description:</strong> {house.description}</p>
            <Bids house={house}></Bids>
        </div>
    );
};

export default House;