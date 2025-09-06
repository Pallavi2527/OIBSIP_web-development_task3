const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const darkModeBtn = document.getElementById("darkmode-btn");

convertBtn.addEventListener("click", () => {
  const temperatureInput = document.getElementById("temperature").value;
  const unitSelect = document.getElementById("unit");
  const selectedUnit = unitSelect.value;

  if (!temperatureInput) {
    alert("Please enter a temperature!");
    return;
  }

  const temperature = parseFloat(temperatureInput);
  if (isNaN(temperature)) {
    alert("Please enter a valid number!");
    return;
  }

  let convertedTemperature, convertedUnit;
  if (selectedUnit === "celsius") {
    convertedTemperature = (temperature * 9) / 5 + 32;
    convertedUnit = "F";
  } else {
    convertedTemperature = ((temperature - 32) * 5) / 9;
    convertedUnit = "C";
  }

  result.innerHTML = `${convertedTemperature.toFixed(2)} &deg;${convertedUnit}`;
});

// Dark/Light Mode Toggle
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
