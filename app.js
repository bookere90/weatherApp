var zipStorage = window.localStorage;

jQuery(document).ready(function() {
    templateManager = new TemplateManager();
    // templateManager.getWeatherTemplate();
    templateManager.getLoginTemplate();
    
    // $( "#getLoginForm").submit(function( event ){
    //     $("#getLoginForm").on('submit', )
    // });

    $( "#getJSONForm" ).submit(function( event ) {
        $("#getJSONForm").on('submit', getJSONData());;
        event.preventDefault();
      });

    function getJSONData() {
        var weatherService = new WeatherService();
        const apiKey = "668a6cac8ea02dacb1cafff04454843c";
        var jsonObject;
        var userSearchInput = document.getElementById("searchInput").value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                jsonObject = JSON.parse(this.responseText);
                weatherService.toZipObject(jsonObject, userSearchInput);
                weatherService.displayData(weatherService.toZipObject(jsonObject, userSearchInput));
            }
        }
        xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?zip=${userSearchInput}` + 
        "&appid=" + apiKey, true);
        xhr.send();
    }
});