"use strict";

const button = document.querySelector("#search button");
const city = document.querySelector("#search #city");

button.addEventListener('click', (e) => {
  console.log(city.value)
})