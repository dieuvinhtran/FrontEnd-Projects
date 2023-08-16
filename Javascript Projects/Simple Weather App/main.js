window.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("fetchButton");
    button.addEventListener("click", function(){
        //inputfields for latitude and longitude
        let lat = document.getElementById("latitude");
        let latValue = lat.value;

        let lon = document.getElementById("longitude");
        let lonValue = lon.value;

        //async function call which will then call displayData
        fetchData(latValue, lonValue).then(data => displayData(data));
    })
})


async function fetchData(lat, long){
    const key = "b5d5be2c7f2f48ecbf2185314230908";
    const urlWeather = "http://api.weatherapi.com/v1/current.json?";

    //generate url with parameter
    const url = urlWeather + "&key=" + key + "&q=" + lat + "," + long;

    try{
        //call and wait for responses
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}

function displayData(data){
    let body = document.getElementById("informations");

    //clears the informations in case the button was already clicked
    body.innerHTML = "";

    let country = _createInformationElement("Country", data.location.country);
    body.append(country);

    for(let item in data.current){
        //get the name of the property and its value
        let info = _createInformationElement(item, data.current[item]);
        body.append(info);
    }
}

function _createInformationElement(label, info){
    let container = document.createElement("div");
    container.classList.add("informationBlock");

    let labelElement = document.createElement("p");
    labelElement.innerHTML = label;

    let infoElement = document.createElement("p");
    infoElement.innerHTML = info;

    container.append(labelElement);
    container.append(infoElement);

    return container;
}