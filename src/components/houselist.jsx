const Houses =[
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
                    <tr>
                        <td>1</td>
                        <td>AAA</td>
                        <td>AADDRR</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>BBB</td>
                        <td>AADDRR</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>CCC</td>
                        <td>AADDRR</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default HouseList;