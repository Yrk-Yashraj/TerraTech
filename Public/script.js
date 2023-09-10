function calculateAndDisplay() {
	const electricityUsage = document.getElementById("electricity-usage").value;
	const naturalGasUsage = document.getElementById("natural-gas-usage").value;
	const propaneUsage = document.getElementById("propane-usage").value;
	const milesDriven = document.getElementById("miles-driven").value;
	const milesPerGallon = document.getElementById("miles-per-gallon").value;
	const airTravel = document.getElementById("air-travel").value;
	const wasteGenerated = document.getElementById("waste-generated").value;
	const meatConsumption = document.getElementById("meat-consumption").value;
	const dairyConsumption = document.getElementById("dairy-consumption").value;
    
	const carbonFootprint =
	  ((electricityUsage * 0.000621371) +
	  (naturalGasUsage * 0.000005024) +
	  (propaneUsage * 0.00011355) +
	  (milesDriven / milesPerGallon * 19.6 * 0.000001) +
	  (airTravel * 0.00001878) +
	  (wasteGenerated * 0.000635) +
	  (meatConsumption * 6.61) +
	  (dairyConsumption * 2.05)).toFixed(2);
  
	const resultElement = document.getElementById("result");
	resultElement.innerText = `Your annual carbon footprint is ${carbonFootprint} metric tons of CO2 equivalent.`;
  }
   
 