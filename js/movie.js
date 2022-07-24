const APIKEY = "5e5e4c75082981b17a79210ea2780821";
const ImgURL = "https://image.tmdb.org/t/p/w500/";




const infoURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=5e5e4c75082981b17a79210ea2780821&language=en-US&page=1";
fetch(infoURL)
    .then(response => response.json())
    .then(response => { console.log(response) });