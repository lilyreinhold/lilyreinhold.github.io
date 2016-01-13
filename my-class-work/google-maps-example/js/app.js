$(document).ready(function() {
	var SuperAwesomeMap;
	function initMap() {
		SuperAwesomeMap = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 40.7127, lng: -74.0059},
			zoom: 12
		});
	}
	initMap()

		var marker = new google.maps.Marker({
			position: {lat: 40.7127, lng: -74.0059},
			map: SuperAwesomeMap,
			title: 'Larry'
		});

		var unionSquare = new google.maps.Marker({
			position: {lat: 40.7356, lng: -73.9906},
			map: SuperAwesomeMap,
			title: 'Pizza'
		})
})