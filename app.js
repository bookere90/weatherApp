zipStorage = window.localStorage;

jQuery(document).ready(function() {

    $( "#getJSONForm" ).submit(function( event ) {
        $("#getJSONForm").on('submit', getJSONData());;
        event.preventDefault();
      });

    function getJSONData() {
        var weatherService = new WeatherService();
        const apiKey = "668a6cac8ea02dacb1cafff04454843c";
        var jsonObject;
        var zipCode = document.getElementById("zipInput").value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                jsonObject = JSON.parse(this.responseText);
                weatherService.jsonToObject(jsonObject, zipCode);
                weatherService.displayData(weatherService.jsonToObject(jsonObject, zipCode));
            }
        }
        xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}` + 
        "&appid=" + apiKey, true);
        xhr.send();
    }
});