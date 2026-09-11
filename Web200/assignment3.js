const milesInput = document.getElementById('miles');
const convertButton = document.getElementById('convert');
const result = document.getElementById('result');

const MILES_TO_KM_FACTOR = 1.60934;
function convertMilesToKm() {
    const miles = parseFloat(milesInput.value);
    if (isNaN(miles) || miles < 0) {
        result.textContent = "enter a valid positive number.";
        return;
    }
    const kilometers = miles * MILES_TO_KM_FACTOR;
    result.textContent = `${miles} miles = ${kilometers.toFixed(2)} km`;
}

convertButton.addEventListener('click', convertMilesToKm);
