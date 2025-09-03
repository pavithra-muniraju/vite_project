const HouseRow = ({ houserow }) => {
    return (
        <>
            <tr >
                <td>{houserow.id}</td>
                <td>{houserow.country}</td>
                <td>{houserow.address}</td>
            </tr>
        </>
    )
}

export default HouseRow;
