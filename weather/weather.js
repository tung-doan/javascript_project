let app = document.querySelector('.card');
let weatherform = document.querySelector('.weatherform');
const APIid = '1575601f7555aaa58b173e027f7427c1';

weatherform.addEventListener("submit", async event => {
    event.preventDefault();
    let name = document.getElementById('cityinput').value;
    if (name) {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIid}`)
            if (data.ok) {
                let response = await data.json();
                displayform(response);
            }
            else {
                throw new Error("unable to fetch data");
            }
        }
        catch (error) {
            displayerror(error);
        }
    }
    else {
        displayerror("please enter a city's name")
    }
})


function displayform(data) {
    const {name:city, main:{temp, humidity}, weather:[{description, id}] } = data
    app.textContent = ""

    const cityname = document.createElement('h1');
    const tempdisplay = document.createElement('p');
    const humiditydisplay = document.createElement('p');
    const desdisplay = document.createElement('p');
    const weatherdisplay = document.createElement('p');

    cityname.textContent = city;
    tempdisplay.textContent = `${((temp - 273.15)*(9/5)+32).toFixed(1)}°F` ;
    humiditydisplay.textContent = `Humidity: ${humidity}%`;
    desdisplay.textContent = description;
    weatherdisplay.textContent = weatheremoji(id);

    cityname.classList.add('CityDisplay');
    tempdisplay.classList.add('TempDisplay')
    humiditydisplay.classList.add('HumidityDisplay');
    desdisplay.classList.add('DescDisplay');
    weatherdisplay.classList.add('WeatherEmoji');

    app.style.display = 'flex';
    app.appendChild(cityname);
    app.appendChild(tempdisplay)
    app.appendChild(humiditydisplay)
    app.appendChild(desdisplay)
    app.appendChild(weatherdisplay)
}

function weatheremoji(weatherid){
     if(weatherid >= 200 && weatherid < 300) return '⛈️'
     else if(weatherid >= 300 && weatherid < 400) return '🌦️'
     else if(weatherid >= 500 && weatherid < 600) return '🌧️'
     else if(weatherid >= 600 && weatherid < 700) return '☃️'
     else if(weatherid >= 700 && weatherid < 800) return '🍃'
     else if(weatherid == 800 ) return '☀️'
     else if(weatherid > 800 && weatherid < 810) return '🌤️' 
     else return '❓';
}

function displayerror(error) {
    const newerror = document.createElement('p');
    app.style.display = 'flex';
    app.textContent = "";
    newerror.textContent = error;
    newerror.classList.add('ErrorDisplay');
    app.appendChild(newerror);
}