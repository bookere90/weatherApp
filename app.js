zipStorage = window.localStorage;

jQuery(document).ready(function() {
    $('#getJSONForm').submit(getJSONData);

    function getJSONData() {
        const apiKey = "668a6cac8ea02dacb1cafff04454843c"
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
    
    function jsonToObject(jsonObject, zipCode){
        var zipCode = zipCode;
        var jsonObject = jsonObject;
        var zipObject = new ZipInfo(zipCode, jsonObject.main.humidity, jsonObject.main.pressure, jsonObject.main.temp,
            jsonObject.main.temp_max, jsonObject.main.temp_min, jsonObject.sys.country);
        // console.log(zipObject);
        zipStorage.setItem(zipObject.zipCode, JSON.stringify(zipObject));
        return zipObject.zipCode;
    }

    function displayData(zipObject){
        var zipCode = zipObject;
        $("#splashWeatherData").empty();
        $("#splashWeatherData").prepend("<table id='displayTable' border='1'><th>Hello</th></table>");
        // console.log(JSON.parse(zipStorage.getItem(zipCode)));
        var retrievedZipData = JSON.parse(zipStorage.getItem(zipCode));
        for(key in Object.keys(retrievedZipData)){
            console.log(retrievedZipData[key]);
        }
    }
});