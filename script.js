
const adviceList = [
    "Believe in yourself and your abilities.",
    "Stay true to your values and principles.",
    "Seek guidance from trusted adults when needed.",
    "Build strong and positive relationships with friends.",
    "Take care of your mental and physical health.",
    "Embrace challenges as opportunities for growth."
];



let pastAdvice = [];

function getAdvice() {
    const adviceDisplay = document.getElementById("adviceDisplay");
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    const advice = adviceList[randomIndex];

    adviceDisplay.textContent = advice;
    pastAdvice.push(advice);
}

function showPastAdvice() {
    alert("Past Advice:\n" + pastAdvice.join("\n"));
}

function updateNextPeriod() {
    const cycleLength = document.getElementById("cycleLength").value;

    if (!cycleLength) {
        alert("Please enter your menstrual cycle length.");
        return;
    }

    const nextPeriodDate = calculateNextPeriod(cycleLength);

    if (!nextPeriodDate) {
        alert("Error calculating next period date. Please check your input.");
        return;
    }

    const futurePeriodInfo = document.getElementById("futurePeriodInfo");
    const formattedNextPeriodDate = formatDate(nextPeriodDate);
    futurePeriodInfo.textContent = `Next period is expected around: ${formattedNextPeriodDate}`;
}

function calculateNextPeriod(cycleLength) {
    const today = new Date();
    const nextPeriodDate = new Date(today.getTime() + cycleLength * (24 * 60 * 60 * 1000));

    if (isNaN(nextPeriodDate.getTime())) {
        return null;
    }

    return nextPeriodDate;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function calculateOvulation() {
    const cycleLength = document.getElementById("cycleLength").value;

    if (!cycleLength) {
        alert("Please enter your menstrual cycle length.");
        return;
    }

    const ovulationDate = calculateOvulationDate(cycleLength);

    if (!ovulationDate) {
        alert("Error calculating ovulation date. Please check your input.");
        return;
    }

    const ovulationInfo = document.getElementById("ovulationInfo");
    const formattedOvulationDate = formatDate(ovulationDate);
    ovulationInfo.textContent = `Ovulation is expected around: ${formattedOvulationDate}`;
}

function calculateOvulationDate(cycleLength) {
    // Assume ovulation occurs 14 days before the start of the next period
    const ovulationOffset = 14;
    const today = new Date();
    const nextPeriodDate = new Date(today.getTime() + cycleLength * (24 * 60 * 60 * 1000));
    const ovulationDate = new Date(nextPeriodDate.getTime() - ovulationOffset * (24 * 60 * 60 * 1000));

    if (isNaN(ovulationDate.getTime())) {
        return null;
    }

    return ovulationDate;
}




function storeMood() {
    const currentMood = document.getElementById("currentMood").value;
    alert(`Mood "${currentMood}" stored successfully!`);
}

let moodHistory = [];

function storeMood() {
    const currentMood = document.getElementById("currentMood").value;
    alert(`Mood "${currentMood}" stored successfully!`);
    
    moodHistory.push(currentMood);
    updateMoodHistory();
}

function updateMoodHistory() {
    const moodList = document.getElementById("moodList");
    
    // Clear previous entries
    moodList.innerHTML = "";

    // Update with the latest mood history
    moodHistory.forEach(mood => {
        const li = document.createElement("li");
        li.textContent = mood;
        moodList.appendChild(li);
    });
}
// Function to redirect to the selected scenario
function redirectToScenario() {
    const selectElement = document.getElementById("scenarios");
    const selectedScenario = selectElement.value;

    if (selectedScenario) {
        window.location.href = selectedScenario;
    }
}

// Function to view medical scenarios
function viewMedicalScenarios() {
    // Redirect to medical_scenarios.html
    window.location.href = "medical_scenarios.html";
}


function suggestHealthyFoods() {
    const healthyFoodsList = document.getElementById("healthyFoodsList");
    
   
    const suggestedFoods = ["Leafy greens", "Berries", "Nuts", "Whole grains", "Salmon"];
    
    healthyFoodsList.textContent = "Healthy Foods Suggestions:\n" + suggestedFoods.join(", ");
}
// script.js
// ...

// Array to store user credentials
const users = [
    { username: 'shobia', password: 'shobia' },
    { username: 'jona', password: 'jona' },
    { username: 'vinitha', password: 'vinitha' }
];


function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the user exists
    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
        // Redirect to index page
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// redirecting to next period page
function redirectNextPeriod() {
    window.location.href = "nextperiod.html";
}

function redirectToMoodPage() {
    // Redirect to moodpage.html
    window.location.href = "moodpage.html";
}

function redirectToFood() {
    // Redirect to moodpage.html
    window.location.href = "food.html";
}