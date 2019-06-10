
class TemplateManager{

    static getWeatherTemplate(){
        $("splashWeatherData").empty();
        $("body").append(`<video autoplay muted loop id="rainVid">
        <source src="backgroundVid.mp4" type="video/mp4">
        </video>
        <div class="container" id="displayArea">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6 content" id="splashWeatherData">
                <form id="getJSONForm">
                    <div class="form-group">
                        <label for="zipInput" id="zipLabel">Enter Zip Code or State</label>
                        <input type="text" name="zipInput" class="form-control" id="searchInput" placeholder="e.g. 77554" required>
                        <div id="radioGroup" class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-secondary active">
                                <input type="radio" name="options" id="kelvinButton" class ="tempType" autocomplete="off" checked> Kelvin
                            </label>
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="celsiusButton" class="tempType" autocomplete="off"> Celsius
                            </label>
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="fahrenheitButton" class="tempType" autocomplete="off"> Fahrenheit
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
                </form>
            </div>
            <div class="col-sm-3"></div>
        </div>
        </div>`)
    }
}



