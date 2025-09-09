import { useEffect, useOptimistic, useState } from "react";
import loadingStatus from "./loadingStatus";

const useBids = (houseId) => {
    // Simulate fetching bids for a specific house
    const [bids, setBids] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    const [optimisticBids, addOptimisticBids] =  useOptimistic(bids, (bids, newBid) => [...bids, newBid]);
    useEffect(() => {
        const fetchBids = async () => {
            setLoadingState(loadingStatus.isLoading);
            try {
                const response = await fetch(`https://127.0.0.1:4000/bid/${houseId}`);
                const bids = await response.json();
                setBids(bids);
                setLoadingState(loadingStatus.loaded);
            } catch {
                setLoadingState(loadingStatus.hasError);
            }
        }
        fetchBids();
    }, [houseId])

    const postBid = async (bid) => {
        const response = await fetch('https://127.0.0.1:4000/bid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(bid)
        });
        return await response.json();
    }

    const addBid = async (bid) => {
        addOptimisticBids(bid);
        const postedBid = await postBid(bid);
        setBids([...bids, postedBid]);
    }

    return [bids, loadingState, addBid];
}
export default useBids;