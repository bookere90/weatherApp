
class WeatherObject{
    constructor(humidity, pressure, temperature, tempHigh, tempLow){
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature;
        this.tempHigh = tempHigh;
        this.tempLow = tempLow;
    }
}

class ZipObject extends WeatherObject{
    constructor(zipCode, humidity, pressure, temperature, tempHigh, tempLow){
        super(humidity, pressure, temperature, tempHigh, tempLow);
        this.zipCode = zipCode;
    }

    static getTemperatureUnit(weatherObject){
        $('.tempType').each(function(){
            var checked = $(this).is(':checked');
            var buttonId = $(this).attr('id');
            if(checked && buttonId == "celsiusButton"){
                console.log("celsius button checked");
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