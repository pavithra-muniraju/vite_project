import navValues from "../navigation/navValues";
import House from "./house";
import HouseList from "./houselist";

const ComponentPicker = ({currentNavLocation}) => {
    switch(currentNavLocation) {
        case navValues.home:
            return <HouseList></HouseList>;
        case navValues.house:
            return <House></House>;
        default:
            return <div>Invalid navigation location at {currentNavLocation}</div>;
    }        
};

export default ComponentPicker;