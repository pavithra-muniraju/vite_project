import { use, useEffect, useState } from "react";
import HouseRow from "./houserow";
import loadingStatus from "../hooks/loadingStatus";
import LoadingIndicator from "./loadingIndicator";
import useHouse from "../hooks/useHouse";


const HouseList = ({ selectHouse }) => {
    
    
    const [houses, setHouses, loadingState] = useHouse();
    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState}></LoadingIndicator>
    }
     
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 4,
                country: "cccc",
                address: "dddd"
            }
        ])
    }
    return (
        <>
            <h5>House List !!</h5>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Country</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => (
                        <HouseRow key={h.id} houserow={h} selectHouse={selectHouse} />
                    ))}
                </tbody>
            </table>
            <button onClick={addHouse} className="btn btn-primary">
                Add House
            </button>
        </>
    )
}

export default HouseList;