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


    

