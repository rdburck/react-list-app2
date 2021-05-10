//necessary function in JQuery that allows us to manipulate the DOM
//without worrying whether such DOM elements have been created or not.
$(document).ready(() => {
    $('#searchForm').on('submit', (e)=> {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        //prevents data from form from being collected, sent, and stored somewhere
        e.preventDefault();
    })
})

function getMovies(searchText){
    let api = 'c2762c91';
    let url = 'http://www.omdbapi.com/?apikey='+api;
    let result = '';
    $.ajax({
        method:'GET',
        url:url+'&t='+searchText,
        success:function(data){
            console.log(data);
            result = `<div class="d-flex justify-content-center">
                <div class="well text-center">
                    <img src="${data.Poster}" class="img-fluid img-thumbnail w-50 h-50"></img>
                    <h5 class="text-center">${data.Title}</h5>
                    <h5 class="text-center">Genre: ${data.Genre}</h5>
                    <h5 class="text-center">Actors: ${data.Actors}</h5>
                    <h5 class="text-center">Director ${data.Director}</h5>
                    <p class="text-justify">${data.Plot}</p>
                    <a class="btn btn-primary" href="http://imdb.com/title/${data.imdbID}" target="_blank">Movie Details</a>
                </div>
            </div>`;
            $('#movies').html(result);
        }    
    })

}


