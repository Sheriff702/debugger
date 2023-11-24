"use strict";
//1. First i took a glimse over the code and saw couple of errors and i will mark it with //{1}

//{1} ('search") and hashtagg
let formEl = document.querySelector("#search");
//{1} querySelectr and hashtaggs
let cityInputEl = document.querySelector("#city");
let tempEl = document.querySelector("#temp");
let messageEl = document.querySelector("#message");

async function getData() {
  /* Fetch data from Open Weather Map API, passing the input value as city*/
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value}&appid=8f20807cea52eed92572aea82df038d5`
  );
  let data = await res.json();

  /* We get temperatures back in Kelvin so we need to convert nto Celsius
    https://www.rapidtables.com/convert/temperature/kelvin-to-celsius.html */

  //{1} you missed to access the main where the temp is stored.
  let temp = data.main.temp - 273.15;

  // {1} "${temp}°C" fixed quotes and the decimal points
  tempEl.textContent = `${temp.toFixed(2)}°C`;

  /*
    Different temperature ranges should print different messages:
    Below 0 = Winter is coming
    0-10 = Sweater weather
    11-20 = Put a jacket on and regret it as soon as you start moving
    Above 21 = Hotter outside than Taylor Swift's latest single
    */

  //{1} (temp > 0)
  //{1} I changed the if statements
  if (temp < 0) {
    messageEl.textContent = "Winter is coming...";
  } else if (temp >= 0 && temp <= 10) {
    messageEl.textContent = "Sweater weather!";
  } else if (temp > 10 && temp <= 20) {
    messageEl.textContent =
      "Put a jacket on and regret it as soon as you start moving";
  } else {
    messageEl.textContent = "Hotter outside than Taylor Swift's latest single";
  }
}
// {1} function e , preventDefault
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  getData();
});
