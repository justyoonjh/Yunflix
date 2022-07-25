const APIKEY = "5e5e4c75082981b17a79210ea2780821";
const ImgURL = "https://image.tmdb.org/t/p/w500/";

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json: charset=utf-8' 
    }
};


    const now_playingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=5e5e4c75082981b17a79210ea2780821&language=en-US&page=1";
    const now_playing = document.getElementById("now-playing");
    fetch(now_playingURL, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach((element) => {
                console.log(element.backdrop_path);
                console.log(element.title);
                console.log(element.vote_average);
       
                let movie = document.createElement("li");
                let moviediv = document.createElement("div");
                let backdrop = document.createElement("img");
                backdrop.setAttribute("src", ImgURL +element.backdrop_path);
                let title = document.createElement("h4");
                title.innerText = element.title;
                let rate = document.createElement("span");
                rate.innerText = "★" + element.vote_average;
                moviediv.appendChild(backdrop);
                moviediv.appendChild(title);
                moviediv.appendChild(rate);
                movie.appendChild(moviediv);
                now_playing.appendChild(movie);
            })
        });

    const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=5e5e4c75082981b17a79210ea2780821&language=en-US&page=1";
    const popular = document.getElementById("popular");
    fetch(popularURL, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach((element) => {
                console.log(element.backdrop_path);
                console.log(element.title);
                console.log(element.vote_average);
           
                let movie = document.createElement("li");
                let moviediv = document.createElement("div");
                let backdrop = document.createElement("img");
                backdrop.setAttribute("src", ImgURL +element.backdrop_path);
                let title = document.createElement("h4");
                title.innerText = element.title;
                let rate = document.createElement("span");
                rate.innerText = "★" + element.vote_average;
                moviediv.appendChild(backdrop);
                moviediv.appendChild(title);
                moviediv.appendChild(rate);
                movie.appendChild(moviediv);
                popular.appendChild(movie);
            })
        });

    const high_ratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=5e5e4c75082981b17a79210ea2780821&language=en-US&page=1";
    const high_rated = document.getElementById("top-rated");
    fetch(high_ratedURL, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach((element) => {
                console.log(element.backdrop_path);
                console.log(element.title);
                console.log(element.vote_average);
           
                let movie = document.createElement("li");
                let moviediv = document.createElement("div");
                let backdrop = document.createElement("img");
                backdrop.setAttribute("src", ImgURL +element.backdrop_path);
                let title = document.createElement("h4");
                title.innerText = element.title;
                let rate = document.createElement("span");
                rate.innerText = "★" + element.vote_average;
                moviediv.appendChild(backdrop);
                moviediv.appendChild(title);
                moviediv.appendChild(rate);
                movie.appendChild(moviediv);
                high_rated.appendChild(movie);
            })
        });

    const upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=5e5e4c75082981b17a79210ea2780821&language=en-US&page=1";
    const upcoming = document.getElementById("upcoming");
    fetch(upcomingURL, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach((element) => {
                console.log(element.backdrop_path);
                console.log(element.title);
                console.log(element.vote_average);
           
                let movie = document.createElement("li");
                let moviediv = document.createElement("div");
                let backdrop = document.createElement("img");
                backdrop.setAttribute("src", ImgURL +element.backdrop_path);
                let title = document.createElement("h4");
                title.innerText = element.title;
                let rate = document.createElement("span");
                rate.innerText = "★" + element.vote_average;
                moviediv.appendChild(backdrop);
                moviediv.appendChild(title);
                moviediv.appendChild(rate);
                movie.appendChild(moviediv);
                upcoming.appendChild(movie);
            })
        });

    


