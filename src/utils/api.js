import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1247591a0c92fe93db03a207fd5178f0";

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            params: { ...params, api_key: API_KEY },
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};


