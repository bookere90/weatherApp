
class ZipInfo{
    constructor(zipCode, humidity, pressure, temperature, tempHigh, tempLow, countryName){
        this.zipCode = zipCode
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature;
        this.tempHigh = tempHigh;
        this.tempLow = tempLow;
        this.countryName = countryName;
    }

    toFahrenheit(){
        this.tempHigh = tempHigh  * (9/5) - 459.67;
        this.tempLow = this.tempLow * (9/5) - 459.67;
    }

    toCelsius(){
        this.tempHigh = this.tempHigh * (9/5) - 459.67;
        this.tempLow = this.tempHigh * (9/5) - 459.67;
    }
}


