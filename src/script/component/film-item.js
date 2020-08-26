class FilmItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set film(film) {
        this._film = film;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .fan-art-film {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .film-info {
                    padding: 24px;
                }
                
                .film-info > h2 {
                    font-weight: lighter;
                }
                
                .film-info > p {
                    text-align: justify;
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>
            <img class="fan-art-film" src="https://image.tmdb.org/t/p/w500/${this._film.poster_path}" alt="Fan Art">
            <div class="film-info">
                <h2>${this._film.title}</h2>
                <p><b>Release : </b>${this._film.release_date}, <b>Ranting : </b>${this._film.vote_average}</p>
                <p><b>Deskripsi : </b>${this._film.overview}</p>
            </div>`;
    }
 }

 customElements.define("film-item", FilmItem);