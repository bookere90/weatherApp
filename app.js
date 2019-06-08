zipStorage = window.localStorage;

function getJSONData() {
    const apiKey = "668a6cac8ea02dacb1cafff04454843c"
    var jsonObject;
    var zipCode = document.getElementById("zipInput").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            jsonObject = JSON.parse(this.responseText);
            storeObject(jsonObject, zipCode);
        }
    }
    xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}` + 
    "&appid=" + apiKey, true);
    xhr.send();
}

function storeObject(jsonObject, zipCode){
    var zipCode = zipCode;
    var jsonObject = jsonObject;
    var zipObject = new ZipInfo(zipCode, jsonObject.main.humidity, jsonObject.main.pressure, jsonObject.main.temp,
        jsonObject.main.temp_max, jsonObject.main.temp_min, jsonObject.sys.country);
    console.log(zipObject);
    zipStorage.setItem(zipObject.zipCode, zipObject);
}