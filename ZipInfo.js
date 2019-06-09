
class ZipObject{
    constructor(zipCode, humidity, pressure, temperature, tempHigh, tempLow){
        this.zipCode = zipCode
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature;
        this.tempHigh = tempHigh;
        this.tempLow = tempLow;
    }

    getTemperatureUnit(zipObject){
        $('.tempType').each(function(){
            var checked = $(this).is(':checked');
            var buttonId = $(this).attr('id');
            if(checked && buttonId == "celsiusButton"){
                console.log("celsius button checked");
                zipObject.tempHigh = Math.floor(zipObject.tempHigh - 273.15).toFixed(1) + "&#8451";
                zipObject.tempLow = Math.floor(zipObject.tempHigh - 273.15).toFixed(1) + "&#8451";
            }
            else if(checked && buttonId == "fahrenheitButton"){
                zipObject.temperature = Math.floor(((zipObject.tempHigh - 273.15) * 1.8) + 32).toFixed(1) + "&#8457";
                zipObject.tempHigh = Math.floor(((zipObject.tempHigh - 273.15) * 1.8) + 32).toFixed(1) + "&#8457";
                zipObject.tempLow = Math.floor(((zipObject.tempLow - 273.15) * 1.8) + 32).toFixed(1) + "F";
            }
        });
    }
}