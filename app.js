var userStorage = window.localStorage;
// var userObject = {"username":"eric90booker@gmail.com", "password":"password" };

userStorage.setItem('eric90booker@gmail.com', 'password');

jQuery(document).ready(function() {
    TemplateManager.getLoginTemplate();

    $( "#loginForm" ).submit((event) => {
        let emailInput = $('#emailInput').val();
        let passwordInput = $('#passwordInput').val();
        console.log(emailInput);
        console.log(passwordInput);
        // console.log(emailInput);
        Object.keys(userStorage).forEach((key) => {
            let retrievedValue = userStorage.getItem(key);      
            if(emailInput == key && passwordInput == retrievedValue){
                TemplateManager.getWeatherTemplate();
            }
        });
        event.preventDefault();
    });

    // $( "#createAcctButton").click(() => {
        
    // });

    $( "#getJSONForm" ).submit((event) => {
        $("#getJSONForm").on('submit', getJSONData());;
        event.preventDefault();
      });

    function getJSONData() {
        const apiKey = "668a6cac8ea02dacb1cafff04454843c";
        var userSearchInput = document.getElementById("searchInput").value;
        var xhr = new XMLHttpRequest();

        // lookup fetch function to replace this
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                let jsonObject = JSON.parse(this.responseText);
                WeatherService.displayData(WeatherService.toZipObject(jsonObject, userSearchInput));
            }
        }
        xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?zip=${userSearchInput}` + 
        "&appid=" + apiKey, true);
        xhr.send();
    }
});