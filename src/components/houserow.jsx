const HouseRow = ({ houserow }) => {
    return (
        <>
            <tr >
                <td>{houserow.id}</td>
                <td>{houserow.name}</td>
                <td>{houserow.address}</td>
            </tr>
        </>
    )
}

export default HouseRow;
