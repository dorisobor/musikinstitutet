const View = {
/*
  displayArtist(allArtists){
    for (const artist of allArtists){

      let artistName = artist.name;
      let artistCard = `
      <div>
        <p>${artistName}</p>
      </div>
      `;
      artists.innerHTML += artistCard;
    }
  },
*/
  displayAlbum(album){
    const albumTitle = album.title;
    const albumImage = album.coverImage || "https://orig00.deviantart.net/5162/f/2014/153/9/e/no_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg";

    //if album.artist name is not there, then return message, else return album artist name.
    //let artistName = album.artists[0] ? album.artists[0].name : "undefined not there";

    // displays more than one artist if there, or none if there aren't any (see temp lit vid)
    const artistName = album.artists.map(artist => artist.name).join(", ");

    // Average rating is passed with the album object, therefore can
    // be returned in the template literal.
    const averageRating = album.averageRating;
    console.log(album);

    const albumCard = `
        <div class="col-sm" >
          <img src = "${albumImage}">
          <div class="album-information">
            <p class="album-title"><span class="label">${albumTitle}</span> </p>
            <p class="artist-name"><span class="label"></span> ${artistName}</p>
            <p class="rating"><span class="label">Average rating:</span> ${averageRating}</p>
          </div>
        </div>
        `;
     contentAlbums.innerHTML += albumCard;
  },
  /*
  emptySearchBox(){
      let emptySearchBoxMessage =
      `<div class="alert alert-info" role="alert">
        You didn't search for anything - try again!
        </div>
        `;
      let errorMessage = document.getElementById('error-message');
      errorMessage.innerHTML = emptySearchBoxMessage;
  }
  */
}
