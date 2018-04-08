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

// Load all the albums
fetchAlbums();

// Fetch artists
function fetchAlbums() {

	fetch(`https://folksa.ga/api/albums?limit=5&key=flat_eric`)
		.then((response) => response.json())
		.then((albums) => {
			globalAlbumsList = albums;
      for (album of albums){
        getAlbumById(album._id);
      }
      /*
			// loop through all albums
			let articleAlbums = "";
			for (const album of albums) {
				articleAlbums += `
          <article><p>${album.title} Artist: ${album.artists}</p></article>
        `;
			}
			contentAlbums.innerHTML = articleAlbums;

      */
    })
		.catch((error) => {
			console.log(error)
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


function getAlbumById(albumID){
  fetch(`https://folksa.ga/api/albums/${albumID}?key=flat_eric`)
  .then(response => response.json())
  .then(album =>{
    View.displayAlbum(album);
  })
  .catch(error => {
    errorMessage.innerText = error;
  });
}
