import { useEffect, useState } from "react";
import loadingStatus from "./loadingStatus";
const useHouse = () => {
    const [houses, setHouses] = useState([]);

    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    useEffect(() => {
        const fetchHouses = async () => {
            setLoadingState(loadingStatus.isLoading);
            try {
                const response = await fetch('https://127.0.0.1:4000/house');
                const houses = await response.json();
                setHouses(houses);
                setLoadingState(loadingStatus.loaded);
            } catch {
            
                setLoadingState(loadingStatus.hasError);
            }
        }
        fetchHouses()
    }, []);

    return [houses, setHouses, loadingState];
}
export default useHouse;