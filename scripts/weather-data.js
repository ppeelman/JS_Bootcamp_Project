"use strict";

class Weather {
  constructor(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';
  }

  get temperature() {
    return this._temperature;
  }

  set temperature(temp) {
    this._temperature = (temp * 1.8 + 32).toFixed(2); // Convert temperature in Celsius to Farenheit

  }
}


/*
---------
---ES5---
---------

Object.defineProperty(Weather.prototype, 'temperature', {
  get: function() {
    return this.temperature;
  },

  set: function(temp) {
    return (temp * 1.8 + 3.2).toFixed(2);
  }

}) 
*/