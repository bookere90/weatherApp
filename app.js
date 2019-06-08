zipStorage = window.localStorage;

jQuery(document).ready(function() {

    $( "#getJSONForm" ).submit(function( event ) {
        $("#getJSONForm").on('submit', getJSONData());;
        event.preventDefault();
      });

    function getJSONData() {
        const apiKey = "668a6cac8ea02dacb1cafff04454843c";
        var jsonObject;
        var zipCode = document.getElementById("zipInput").value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                jsonObject = JSON.parse(this.responseText);
                jsonToObject(jsonObject, zipCode);
                displayData(jsonToObject(jsonObject, zipCode));
            }
        }
        xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}` + 
        "&appid=" + apiKey, true);
        xhr.send();
    }

    function jsonToObject(jsonObject, zipKey){
        var zipKey = zipKey;
        var jsonObject = jsonObject;
        var zipObject = new ZipInfo(zipKey, jsonObject.main.humidity, jsonObject.main.pressure, jsonObject.main.temp,
            jsonObject.main.temp_max, jsonObject.main.temp_min, jsonObject.sys.country);
        console.log(zipObject);
        zipStorage.setItem(zipObject.zipCode, JSON.stringify(zipObject));
        return zipObject.zipCode;
    }

    function displayData(zipObject){
        var zipCode = zipObject;
        $("#splashWeatherData").empty();
        $("#splashWeatherData").prepend(`<h2>${zipObject}</h2>`);
        $("#splashWeatherData").append("<table id='displayTable' border='1'><body id='tableBody'></tbody></table>");
        var retrievedZipData = JSON.parse(zipStorage.getItem(zipCode));
        var keys = Object.keys(retrievedZipData);
        var values = Object.values(retrievedZipData);
        for (var i=1; i < keys.length; i++){
            console.log(keys[i]);
            $("#displayTable").append(`<tr><td>${keys[i]}</td><td>${values[i]}</td></tr>`);
        }   
    }


});