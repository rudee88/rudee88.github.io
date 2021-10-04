function calculateDistances(lat, lon) {
    let dpulze = haversine(lat, lon, 2.922561, 101.650965);
    let pyramid = haversine(lat, lon, 3.073065, 101.607787);
    let klcc = haversine(lat, lon, 3.158761, 101.714524);

    return [dpulze, pyramid, klcc];
}

let elLocate = document.getElementById('locate');
elLocate.addEventListener('click', function() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const elLat = document.getElementById('lat');
            const elLong = document.getElementById('long');
            const elDpulze = document.getElementById('depulze');
            const elKlcc = document.getElementById('klcc');
            const elSunway = document.getElementById('sunway');

            const userLat = position.coords.latitude;
            const userLong = position.coords.longitude;

            const distances = calculateDistances(userLat, userLong);

            elLat.innerHTML = 'Your latitude: ' + userLat;
            elLong.innerHTML = 'Your longitude: ' + userLong;
            elDpulze.innerHTML = 'Distance to Dpulze, Cyberjaya is ' + distances[0] + ' KM';
            elKlcc.innerHTML = 'Distance to KLCC is ' + distances[2] + ' KM';
            elSunway.innerHTML = 'Distance to Suwnway is ' + distances[1] + ' KM';
        })
    } else {
        alert('Geolocation is not supported!')
    }
})