import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

// Custom hook to make GET call to API
export default function useGet(URL) {
    // state of fetched data from API
    const [fetchData, setFetchData] = useState([]);

    // useCallback - always recall if data changes
    const getDataFromAPI = useCallback(() => {
        // axios get call
        axios.get(URL)
            .then(response => {
                // save data to us state
                setFetchData(response.data.results)
            })
            .catch(error => console.error('Error:${error}'))
    }, [URL])

    // render result after state changes
    useEffect(() => {
        getDataFromAPI()
    }, [getDataFromAPI])

    // returning fetched data
    return fetchData;
}