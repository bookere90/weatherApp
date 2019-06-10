
class WeatherService{
    static toZipObject(jsonObject, zipCode){
        var zipCode = zipCode;
        var jsonObject = jsonObject;
        var zipObject = new ZipObject(zipCode, jsonObject.main.humidity + "%", jsonObject.main.pressure, jsonObject.main.temp,
            jsonObject.main.temp_max, jsonObject.main.temp_min);
        WeatherService.getTemperatureUnit(zipObject);
        return zipObject;
    }
    
    static displayData(weatherObject){
        var weatherObject = weatherObject;
        $("#displayTable").empty();
        $("#splashWeatherData").append("<table id='displayTable' border='1'><body class='tableBody'></tbody></table>");
        $("#displayTable").prepend(`<tr id="titleRow"><td><h2 id='tableTitle'>Weather for ${weatherObject.zipCode}</h2></td></tr>`);
        $("#titleRow").append("<td id='topRowRightCell'></td>");
        var keys = Object.keys(weatherObject);
        var values = Object.values(weatherObject);
        for (var i=0; i < keys.length; i++){
            console.log(keys[i]);
            $("#displayTable").append(`<tr><td>${keys[i]}</td><td>${values[i]}</td></tr>`);
        }   
    }

    static getTemperatureUnit(weatherObject){
        $('.tempType').each(function(){
            var checked = $(this).is(':checked');
            var buttonId = $(this).attr('id');
            if(checked && buttonId == "celsiusButton"){
                weatherObject.tempHigh = Math.floor(weatherObject.tempHigh - 273.15).toFixed(1) + "&#8451";
                weatherObject.tempLow = Math.floor(weatherObject.tempHigh - 273.15).toFixed(1) + "&#8451";
            }
            else if(checked && buttonId == "fahrenheitButton"){
                weatherObject.temperature = Math.floor(((weatherObject.tempHigh - 273.15) * 1.8) + 32).toFixed(1) + "&#8457";
                weatherObject.tempHigh = Math.floor(((weatherObject.tempHigh - 273.15) * 1.8) + 32).toFixed(1) + "&#8457";
                weatherObject.tempLow = Math.floor(((weatherObject.tempLow - 273.15) * 1.8) + 32).toFixed(1) + "F";
            }
        });
    }
}
