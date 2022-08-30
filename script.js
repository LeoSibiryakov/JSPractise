let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastSeenMovie1 = prompt('Один из последних просмотренных фильмов?', '');
let rating1 = prompt('На сколько оцените его?', '');
let lastSeenMovie2 = prompt('Один из последних просмотренных фильмов?', '');
let rating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies.lastSeenMovie1 = rating1;
personalMovieDB.movies.lastSeenMovie2 = rating2;
console.log(personalMovieDB);