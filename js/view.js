const View = {

  displayArtist(allArtists){
    for (const artist of allArtists){
      //let li = document.createElement('li');
      //li.innerText = artist.name;
      //artists.appendChild(li);

      let artistName = artist.name;
      let artistCard = `
      <div>
        <p>${artistName}</p>
      </div>
      `;
      artists.innerHTML += artistCard;
    }
  },

  displayAlbum(album){
    //for (const album of allAlbums){}
      //let li = document.createElement('li');
      //li.innerText = album.title;
      //albums.appendChild(li);

      const albumTitle = album.title;
      const albumImage = album.coverImage || "https://orig00.deviantart.net/5162/f/2014/153/9/e/no_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg";

      //if album.artist name is not there, then return message, else return album artist name.
      //let artistName = album.artists[0] ? album.artists[0].name : "undefined not there";

      // displays more than one artist if there, or none if there aren't any (see temp lit vid)
      const artistName = album.artists.map(artist => artist.name).join(", ");

      const albumCard = `
        <div class="col-sm">
          <img src = "${albumImage}">
          <p class="album-title"><span class="label">Album:</span> ${albumTitle}</p>
          <p class="artist-name"><span class="label">Artist:</span> ${artistName}</p>
        </div>
        `;

      contentAlbums.innerHTML += albumCard;
  },

  emptySearchBox(){
      let emptySearchBoxMessage =
      `<div class="alert alert-info" role="alert">
        You didn't search for anything - try again!
        </div>
        `;
      let errorMessage = document.getElementById('error-message');
      errorMessage.innerHTML = emptySearchBoxMessage;
  }
}
