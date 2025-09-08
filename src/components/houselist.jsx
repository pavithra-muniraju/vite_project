import { use, useEffect, useState } from "react";
import HouseRow from "./houserow";
import loadingStatus from "../hooks/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

const HousesArray1 = [
    {
        id: 1,
        name: "AAA",
        address: "bbbb"
    },
    {
        id: 2,
        name: "AAA",
        address: "bbbb"
    },
    {
        id: 3,
        name: "AAA",
        address: "bbbb"
    }
]

const fetchHouses = fetch('https://127.0.0.1:4000/house').then(res => res.json());

const HouseList = ({ selectHouse }) => {
    // const [loadingState, setLoadingState] = useState(loadingStatus.loading);
    // setLoadingState(loadingStatus.loading);
    const houseResult = use(fetchHouses);
    
    const [houses, setHouses] = useState(houseResult);
// setLoadingState(loadingStatus.loaded);
    // if(loadingState !== loadingStatus.loaded) {
    //     return <LoadingIndicator loadingState={loadingState}></LoadingIndicator>
    // }
     
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