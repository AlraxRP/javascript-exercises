const convertToCelsius = function(tempFahrenheit) {
  return Number(((tempFahrenheit-32)*(5/9)).toFixed(1));
};

const convertToFahrenheit = function(tempCelcius) {
  return Number(((tempCelcius * (9/5)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
