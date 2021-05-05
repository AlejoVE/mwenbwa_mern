
function Initialize() {
    var map = L.map('map').setView([50.628709, 5.575633], 7); // LIGNE 18
    
    map.addLayer(osmLayer);
}

export default Initialize;