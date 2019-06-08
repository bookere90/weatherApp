
class WeatherService{
    jsonToObject(jsonObject, zipKey){
        var zipKey = zipKey;
        var jsonObject = jsonObject;
        var zipObject = new ZipInfo(zipKey, jsonObject.main.humidity, jsonObject.main.pressure, jsonObject.main.temp,
            jsonObject.main.temp_max, jsonObject.main.temp_min, jsonObject.sys.country);
        console.log(zipObject);
        zipStorage.setItem(zipObject.zipCode, JSON.stringify(zipObject));
        return zipObject.zipCode;
    }
    
    displayData(zipObject){
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
}
