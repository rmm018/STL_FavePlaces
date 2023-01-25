var map = L.map('map').setView([38.6270, -90.1994], 9);

  
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);
var marker1 = L.marker([38.6366, -90.2924]).addTo(map);
var marker2 = L.marker([38.5830, -90.3012]).addTo(map);
var marker3 = L.marker([38.6123, -90.4868]).addTo(map);
var marker4 = L.marker([38.6337, -90.2007]).addTo(map);
var marker5 = L.marker([38.6128, -90.2594]).addTo(map);

marker1.bindPopup("<b>Attraction 1</b><br>STL Zoo").openPopup();
marker2.bindPopup("<b>Restaurant 1</b><br>Uncle Bills").openPopup();
marker3.bindPopup("<b>Park 1</b><br>Queeny Park").openPopup();
marker4.bindPopup("<b>Attraction 2</b><br>City Museum").openPopup();
marker5.bindPopup("<b>Attraction 3</b><br>Missouri Botanical Garden").openPopup();
