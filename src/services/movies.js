import axios from 'axios';
// const API_KEY = '30a4fb284f96ffaec0832b385ebaa1d2';
// const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGE0ZmIyODRmOTZmZmFlYzA4MzJiMzg1ZWJhYTFkMiIsInN1YiI6IjVkMjBiMGQxOTRkOGE4MDQ5YTQxMzY5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oA0J-0C2PGumoKrAVZQCSeMAHbCPxgHP6ZhAhgtzycg'

const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=30a4fb284f96ffaec0832b385ebaa1d2&language=en-US'

export default (() => {
    async function getTopRatedMovies() {
        const { data } = await axios.get(TOP_RATED_URL);
        return data.results;
    }

    return {
        getTopRatedMovies
    }
})();