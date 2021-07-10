const API_KEY="983e629e8a276ce3bfba9615ea75d48b";

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchMystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchScFi:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV:`/discover/movie?api_key=${API_KEY}&with_geners=10770`,
};