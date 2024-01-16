import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: "bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDIzZjIzYWRjNjk5MjJkNjY2NDQzYmE4MjJlYTJlOCIsInN1YiI6IjY1MzI4ZGJiOGQyMmZjMDBlYTZkMThhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6lKFUJktY8Od7-x8rjV_cqcCUklTebUktXsm0HkqPtE",
};

export const fetchDataFromApi = async (url: string, params?: string) => {
  try {
    const {data} = await axios.get (BASE_URL + url , {
        headers,
        params
    })
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
