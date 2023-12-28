const convertToCelsius = function(num) {

  temp = (num-32)*5/9;
  roundedTemp = Math.round(temp*10)/10;
  return roundedTemp
};

const convertToFahrenheit = function(num) {

  temp = (num*9/5)+32;
  roundedTemp = Math.round(temp*10)/10;
  return roundedTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
