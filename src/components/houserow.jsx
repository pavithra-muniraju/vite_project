import { useContext } from "react";
import navigationContext from "../navigation/navigationContext";
import navValues from "../navigation/navValues";

const HouseRow = ({ houserow }) => {
    // uncomment to see error boundary in action
    // throw new Error("Error in HouseRow Component");

    const {navigate} = useContext(navigationContext)
    return (
        <>
            <tr onClick={()=> navigate(navValues.house, houserow)} >
                <td>{houserow.id}</td>
                <td>{houserow.country}</td>
                <td className={`${houserow.price >=500000? "text-primary": ""}`}>{houserow.address}</td>                
            </tr>
        </>
    )
}

export default HouseRow;
