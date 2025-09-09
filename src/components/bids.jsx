import { useState, useTransition } from "react";
import loadingStatus from "../hooks/loadingStatus";
import useBids from "../hooks/useBids";
import LoadingIndicator from "./loadingIndicator";

const Bids = ({ house }) => {
    const [bids, loadingState, addBid] = useBids(house.id);
    const [isPending, startTransition] = useTransition()

    const emptyBid = {
        houseId: house.id,
        bidder: "",
        amount: 0
    }

    const [newBid, setNewBid] = useState(emptyBid);

    if (loadingState != loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState}></LoadingIndicator>
    }

    const onBidSubmitClick = () => {
        startTransition(async() => await addBid(newBid));
        
        setNewBid(emptyBid)
    }

    const bidSubmitAction = async (formData) => {
        startTransition(async() => await addBid({
            houseId: house.id,
            bidder: formData.get("bidder"),
            amount: parseInt(formData.get("amount"))    
        })
    )
    }

    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <table className="table table-sm">
                        
                    <thead>
                        <tr>
                            <th>Bidder</th>
                            <th>Amount</th>
                        </tr>

                    </thead>
                    <tbody>
                        {bids.map((b) => (
                            <tr key={b.id}>
                                <td>{b.bidder}</td>
                                <td>{b.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-5">
                    <input id="bidder" type="text" className="form-control" placeholder="Bidder Name"
                        value={newBid.bidder} onChange={(e) => setNewBid({ ...newBid, bidder: e.target.value })} />
                </div>
                <div className="col-5">
                    <input id="amount" type="number" className="form-control" placeholder="Bid Amount"
                        value={newBid.amount} onChange={(e) => setNewBid({ ...newBid, amount: parseInt(e.target.value) })} />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" onClick={onBidSubmitClick} disabled={isPending}>Submit Bid</button>
                </div>
            </div> */}
            <form className="row g-3 mt-2" action={bidSubmitAction}>
                <div className="col-md-5">
                    <input type="text" className="form-control" id="bidder" name="bidder" placeholder="Bidder Name"/>
                    <input type="number" className="form-control" id="amount" name="amount" placeholder="Amount"/>
                    <button className="btn btn-primary" disabled={isPending} type="submit">Add</button>
                </div>
                </form>
        </>
    )
}

export default Bids;