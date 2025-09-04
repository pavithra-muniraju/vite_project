const HouseRow = ({ houserow,selectHouse }) => {
    return (
        <>
            <tr onClick={()=> selectHouse(houserow)} >
                <td>{houserow.id}</td>
                <td>{houserow.country}</td>
                <td className={`${houserow.price >=500000? "text-primary": ""}`}>{houserow.address}</td>
            </tr>
        </>
    )
}

export default HouseRow;
