const content = document.getElementById("content");

// get all 5 tracks
let globalTrackList = [];

// Load all tracks
fetchTracks();

// Fetch function
function fetchTracks() {

    fetch(`https://folksa.ga/api/tracks?limit=5&key=flat_eric`)
        .then((response) => response.json())
        .then(function (tracks) {
            globalTrackList = tracks;

            // loop through all tracks 
            let htmlBlock = "";
            for (const track of tracks) {
                htmlBlock += `
<p>${track.title} by ${track.artists.name} </p>
`;
            }
            content.innerHTML = htmlBlock;
        })


        .catch((error) => {
            console.log(error)
        });
}
