// Get the selected scenario from the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedScenario = urlParams.get('scenario');

// Medical scenarios array
const medicalScenarios = {
    "Low flow rate": "low_flow_rate.html",
    "High flow rate": "high_flow_rate.html",
    "Heavy stomach pain": "heavy_stomach_pain.html",
    "Irregular periods": "irregular_periods.html",
};

document.addEventListener("DOMContentLoaded", function () {
    // Display the content for the selected scenario
    displayScenarioContent();
});

function displayScenarioContent() {
    const scenarioContent = document.getElementById("scenarioContent");

    if (selectedScenario !== null && medicalScenarios[selectedScenario]) {
        // Redirect to the specific scenario page
        window.location.href = medicalScenarios[selectedScenario];
    } else {
        scenarioContent.textContent = "Invalid scenario selection.";
    }
}
