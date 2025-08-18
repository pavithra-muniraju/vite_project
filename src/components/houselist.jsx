import { useState } from "react";
import HouseRow from "./houserow";

const HousesArray =[
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
    const [houses, setHouses] = useState(HousesArray);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 4,
                name: "cccc",
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
                        <th>Name</th>
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