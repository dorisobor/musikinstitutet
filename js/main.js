const contentArtists = document.getElementById("content-artists");
const contentAlbums = document.getElementById("content-albums");
const contentTracks = document.getElementById("content-tracks");
const errorMessage = document.getElementById('error-message');

/*ARTIST PART*/

// get all 5 artists
let globalArtistList = [];

// Load all the artists
fetchArtist();

// Fetch artists
function fetchArtist() {

	fetch(`https://folksa.ga/api/artists?limit=5&key=flat_eric`)
		.then((response) => response.json())
		.then((artists) => {
			globalArtistList = artists;

			// loop through all artists
			let articleArtist = "";
			for (const artist of artists) {
				articleArtist += `
          <article><p>${artist.name}</p></article>
        `;
			}
			contentArtists.innerHTML = articleArtist;
		})
		.catch((error) => {
			console.log(error)
		});
}



/*ALBUM PART*/

// get all 5 albums
let globalAlbumtList = [];

// Load Top 5 Albums
fetchTopAlbums();

// Fetch albums
function fetchTopAlbums() {
	fetch(`https://folksa.ga/api/albums?limit=10000&key=flat_eric`)
		.then((response) => response.json())
		.then((albums) => {
			globalAlbumsList = albums;
      // Creating a variable to hold albums passed through the sortRatedAlbums function.
      const sortedAlbums = sortRatedAlbums(albums);

      // Slice the array to return the first 5 albums in the object.
      for (album of sortedAlbums.slice(0,5)){
        getAlbumById(album._id);
      }

    })
		.catch((error) => {
			console.log(error)
		});
}

function sortRatedAlbums(albums){
  // Identifying only the albums that have ratings.
  const ratedAlbums = albums.filter(album => album.ratings.length>0);

  // Sorting those albums by rating in descending order.
  const sortedAlbums = ratedAlbums.sort((album, next) => calculateRating(next) - calculateRating(album));



  return sortedAlbums;
}

/* This function calculates the rating of an object.
** Can use this function to calculate the rating of any object.
*/
function calculateRating(object){
  /* Filtering out nulls. Don't want to include
  ** nulls in total sum count when we're calculating the average rating.
  */
  const filteredRatings = object.ratings.filter(rating => rating != null);

  // Calculating total sum of all ratings using reduce method
  let ratingsTotalSum = filteredRatings.reduce((a, b) => a + b);

  // Finding the mean average rating
  let averageRating = ratingsTotalSum / filteredRatings.length;

  // Converts number to string and keeps it to 1 decimal place.
  averageRating = averageRating.toFixed(1);

  // Adding the averageRating into the object as a new key.
  object.averageRating = averageRating;

  return averageRating;
}

function getAlbumById(albumID){
  fetch(`https://folksa.ga/api/albums/${albumID}?key=flat_eric`)
  .then(response => response.json())
  .then(album =>{
    calculateRating(album);
    View.displayAlbum(album);
  })
  .catch(error => {
    errorMessage.innerText = error;
  });
}

/*TRACK PART*/

// Load all tracks
fetchTracks();

// Fetch function
function fetchTracks() {

	fetch(`https://folksa.ga/api/tracks?limit=5&key=flat_eric`)
		.then((response) => response.json())
		.then((tracks) => {
			globalTrackList = tracks;

			// loop through all the tracks
			let articleTrack = "";
			for (const track of tracks) {
				articleTrack += `
          <article><p>${track.title}</p></article>
        `;
			}
			contentTracks.innerHTML = articleTrack;
		})
		.catch((error) => {
			console.log(error)
		});
}
