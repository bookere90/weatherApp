
class TemplateManager{

        getWeatherTemplate(){
            $("#splashWeatherData").empty();

            $("body").append(`<div class="container" id="displayArea">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10" id="splashWeatherData">
                    <form id="getJSONForm" method="GET">
                        <div class="form-group">
                            <label for="zipInput">Enter Zip Code or State</label>
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
                <div class="col-sm-1"></div>
            </div>
            </div>`)
        }

        getLoginTemplate(){
            $("body").append(`
            <div class="container" id="displayArea">
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">
                <h4>Please Login</h4>
                <form id="loginForm">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button type="button" class="btn btn-link" id="createAcctBtn">Create an account</button>
                    </div>
                </form>
            </div>
            <div class="col-sm-2"></div>
            `);
        }

        getCreateAcctTemplate(){
            
        }
}



