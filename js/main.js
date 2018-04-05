 // get all 5 tracks
let globalTrackList = []; 

 // Load all tracks
 fetchTracks();

// Fetch function
function fetchTracks () {
    
    fetch (`https://folksa.ga/api/tracks?limit=5&key=flat_eric` )
    .then ((response) => response.json())
    .then ((trackData) => { 
    displayTracks(trackData)
        
    })
    .catch((error) => { 
        console.log(error);
    })
}

// Function to display the tracks
function displayTracks (trackData) {
    const content = document.getElementById("content");
    const results = 
    
} 
    

    
    
    

    

