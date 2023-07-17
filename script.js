function day_0(result) {

    document.getElementById("current-temp").innerHTML = result.daily.data[0].temperature
    document.getElementById("max-temp").innerHTML = result.daily.data[0].temperature_max
    document.getElementById("min-temp").innerHTML = result.daily.data[0].temperature_min + "°C "
    document.getElementById("wind_dir").innerHTML = result.daily.data[0].wind.dir
    document.getElementById("wind_kph").innerHTML = result.daily.data[0].wind.speed + " km/hr"
    document.getElementById("humidity").innerHTML = result.daily.data[0].humidity + " % "
    document.getElementById("feels-like").innerHTML = result.daily.data[0].feels_like + "°C "

}


function day_1(result) {

    document.getElementById("day-1-min-temp").innerHTML = result.daily.data[1].temperature_min + "°C "
    document.getElementById("day-1-max-temp").innerHTML = result.daily.data[1].temperature_max + "°C "
    document.getElementById("day-1-humidity").innerHTML = result.daily.data[1].humidity + " % "
    document.getElementById("day-1-summary").innerHTML = result.daily.data[1].summary

}


function day_2(result) {

    document.getElementById("day-2-min-temp").innerHTML = result.daily.data[2].temperature_min + "°C "
    document.getElementById("day-2-max-temp").innerHTML = result.daily.data[2].temperature_max + "°C "
    document.getElementById("day-2-humidity").innerHTML = result.daily.data[2].humidity + " % "
    document.getElementById("day-2-summary").innerHTML = result.daily.data[2].summary

}



async function fetchWeather() {


    const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/daily?place_id=' + input + '&language=en&units=auto'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '725e559e1bmshff55be141680302p1f59dajsn5fbbd7c6ab23',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {

        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result)

        day_0(result)
        day_1(result)
        day_2(result)

    }

    catch (error) {
        alert(error);
    }
}

// fetchWeather();

let input = undefined

document.getElementById('submit').addEventListener('click', function () {
    input = document.getElementById('inputText').value;
    console.log(input);

    document.getElementById("locate").innerHTML = input.toUpperCase()
    fetchWeather();

    document.getElementById('inputText').value = '';
});
