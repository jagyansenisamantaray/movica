import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import { store } from "../store/store";

// const [file, setFile] = useState<File | null>(null)
const useFetch = (url: string) => {
    const [data, setData] = useState<unknown | null>(null);
    const [loading, setLoading] = useState<unknown | null>(null);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch(() => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default useFetch;