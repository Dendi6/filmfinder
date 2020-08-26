class DataSource {
    static searchFilm(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=7376a113360dff63dacea32cf90f8e7a&language=en-US&query=${keyword}&page=1&include_adult=false`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}
export default DataSource;