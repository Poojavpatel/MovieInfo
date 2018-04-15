$(document).ready(function(){
	
	$('#searchForm').on('submit',(e) => {
		let searchText = $('#searchText').val();
		console.log(searchText);
		getMovies(searchText);
		e.preventDefault();
	});

	function getMovies(searchText){
		console.log(searchText,'was searched');
		axios.get('http://www.omdbapi.com/?apikey=ecc4bdf9&s='+searchText)
			.then(function (response) {
				// console.log(response);
				let movies = response.data.Search;
				console.log(movies);
				let output = '';
				$.each(movies, function(index, movie){
					output += `
						<div class="col-md-3">
							<div class="well text-cener">
								<img src="${movie.Poster}" />
								<h5>${movie.Title}</h5>
								<a onclick="movieSelected('$(movie.imdbID)')" class="btn btn-primary" href="#">Movie Details</a>
							</div>
						</div>
					`;
				});

				$('#movies').html(output);
			})
			.catch(function (error) {
				console.log(error);
			});
	}


});