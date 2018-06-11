function makeClass() {
    "use strict";
    class Thermostat {
        //The constructor accepts Fahrenheit temperature.
        //Now create getter and setter in the class, to obtain the temperature in Celsius scale.
        constructor(temperature){
        this._temperature = (5/9 * (temperature - 32)).toFixed(2);
        }
        // getter
        get temperature() {
        return this._temperature;
        }
        // setter
        set temperature(temperature) {
        this._temperature = temperature;
        }
   }
  return Thermostat;
}

  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  console.log(temp);
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C
  console.log(temp);

  