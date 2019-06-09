
class WeatherService{
    toZipObject(jsonObject, zipCode){
        var zipCode = zipCode;
        var jsonObject = jsonObject;
        var zipObject = new ZipObject(zipCode, jsonObject.main.humidity + "%", jsonObject.main.pressure, jsonObject.main.temp,
            jsonObject.main.temp_max, jsonObject.main.temp_min);
        ZipObject.getTemperatureUnit(zipObject);
        console.log(zipObject);
        return zipObject;
    }
    
    displayData(weatherObject){
        var weatherObject = weatherObject;
        console.log(weatherObject);
        $("#displayTable").empty();
        $("#splashWeatherData").append("<table id='displayTable' border='1'><body class='tableBody'></tbody></table>");
        $("#displayTable").prepend(`<tr id="titleRow"><td><h2 id='tableTitle'>Weather for ${weatherObject.zipCode}</h2></td></tr>`);
        $("#titleRow").append("<td id='topRowRightCell'></td>")
        // var retrievedZipData = JSON.parse(zipStorage.getItem(zipCode));
        var keys = Object.keys(weatherObject);
        var values = Object.values(weatherObject);
        for (var i=1; i < keys.length; i++){
            // console.log(keys[i]);
            $("#displayTable").append(`<tr><td>${keys[i]}</td><td>${values[i]}</td></tr>`);
        }   
    }
}
