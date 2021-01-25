import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

// Custom hook to make GET call to API
// stateType is variable to declare is data in obj or array
export default function useGet(URL, stateType) {
    // state of fetched data from API
    const [fetchData, setFetchData] = useState(stateType);

    // useCallback - always recall if data changes
    const getDataFromAPI = useCallback(() => {
        // axios get call
        axios.get(URL)
            .then(response => {
                // save data to us state
                setFetchData(response.data)
            })
            .catch(error => console.error(`Error:${error}`))
    }, [URL])

    // render result after state changes
    useEffect(() => {
        getDataFromAPI()
    }, [getDataFromAPI])

    // returning fetched data
    return fetchData;
}