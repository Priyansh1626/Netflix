import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;
// bf20527d98981d611c6936449a13305b
// /discover/movie?api_key=${API_KEY}&with_genres=10749

// https://api.themoviedb.org/3/discover/movie?api_key=bf20527d98981d611c6936449a13305b&with_genres=10749
