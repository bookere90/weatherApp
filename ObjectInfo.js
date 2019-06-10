
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
}

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}