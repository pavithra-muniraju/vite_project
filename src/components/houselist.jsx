import { useEffect, useState } from "react";
import HouseRow from "./houserow";

const HousesArray1 =[
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

const HouseList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {

        const fetchHouses = async () => { //api call
            const response = await fetch('https://127.0.0.1:4000/house')        
                .then(res => res.json())
                .then(data => setHouses(data));
        };
        fetchHouses();
    },[ ]);

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
                    {houses.map(h => <HouseRow key={h.id} houserow={h}/>
                    )}
                </tbody>
            </table>
            <button onClick={addHouse} className="btn btn-primary">
                Add House
            </button>
        </>
    )
}

export default HouseList;