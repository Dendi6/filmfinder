import './film-item.js';
 
class FilmList extends HTMLElement {
   
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set films(films) {
       this._films = films;
       this.render();
    }
 
    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
 
    render() {
        this.innerHTML = "";
        this._films.forEach(film => {
           const filmItemElement = document.createElement("film-item");
           filmItemElement.film = film
           this.shadowDOM.appendChild(filmItemElement);
        })
    }
}

customElements.define("film-list", FilmList);