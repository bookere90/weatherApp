
class WeatherService{
    storeObject(jsonObject, objectKey){
        var objectKey = objectKey;
        var jsonObject = jsonObject;
        var zipObject = new ZipObject(objectKey, jsonObject.main.humidity + "%", jsonObject.main.pressure, jsonObject.main.temp,
            jsonObject.main.temp_max, jsonObject.main.temp_min);
        // zipObject.getTemperatureUnit(zipObject);
        return zipObject.zipCode;
    }
    
    displayData(zipObject){
        var zipCode = zipObject;
        $("#splashWeatherData").empty();
        $("#splashWeatherData").append("<table id='displayTable' border='1'><body class='tableBody'></tbody></table>");
        $("#displayTable").prepend(`<tr id="titleRow"><td><h2 id='tableTitle'>Weather for ${zipObject}</h2></td></tr>`);
        $("#titleRow").append("<td id='topRowRightCell'></td>")
        var retrievedZipData = JSON.parse(zipStorage.getItem(zipCode));
        var keys = Object.keys(retrievedZipData);
        var values = Object.values(retrievedZipData);
        for (var i=1; i < keys.length; i++){
            // console.log(keys[i]);
            $("#displayTable").append(`<tr><td>${keys[i]}</td><td>${values[i]}</td></tr>`);
        }   
    }
}
