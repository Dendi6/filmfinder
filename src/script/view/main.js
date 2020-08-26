import '../component/film-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const filmListElement = document.querySelector("film-list");
 
   const onButtonSearchClicked = async () => {
       try {
           const result = await DataSource.searchFilm(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       filmListElement.films = results;
   };
 
   const fallbackResult = message => {
       filmListElement.renderError(message);
   };
 
   searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;