function initMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-2.120850),
  zoom:10,
};
var map = new google.maps.Map(document.getElementById("map"),mapProp);
}