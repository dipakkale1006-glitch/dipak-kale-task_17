// Task 17: JavaScript - Division Using Promises
// Objective: Perform division using an Arrow Function returning a Promise with division-by-zero error handling.

// 1. Arrow Function performing division using Promises
const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};


// 2. Dummy Test Cases (At least 5 cases as required)
const testCases = [
    { num1: 10, num2: 2, label: "Example 1" },
    { num1: 10, num2: 0, label: "Example 2" },
    { num1: 45, num2: 5, label: "Example 3" },
    { num1: -20, num2: 4, label: "Example 4" },
    { num1: 0, num2: 7, label: "Example 5" }
];

// Sequential runner demonstrating .then() and .catch() handling on Promises
function executeTestCase(index) {
    if (index >= testCases.length) return;

    const test = testCases[index];
    console.log(test.label);
    console.log("Dividing " + test.num1 + " by " + test.num2 + (test.num2 === 0 ? "..." : ""));

    divideNumbers(test.num1, test.num2)
        .then((result) => {
            console.log("Result: " + result + "\n");
            executeTestCase(index + 1);
        })
        .catch((error) => {
            console.log("Error: " + error + "\n");
            executeTestCase(index + 1);
        });
}

// Execute predefined test cases
executeTestCase(0);


// 3. Interactive Webpage UI Logic
if (typeof document !== "undefined") {
    const form = document.getElementById("divideForm");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const screenDisplay = document.getElementById("screenDisplay");
    const promiseState = document.getElementById("promiseState");
    const resultText = document.getElementById("resultText");
    const outOperation = document.getElementById("outOperation");
    const outStatus = document.getElementById("outStatus");
    const outMessage = document.getElementById("outMessage");
    const presetButtons = document.querySelectorAll(".btn-preset");

    // Function to perform division and handle Promise
    function calculateDivision(n1, n2) {
        // Set state to Pending
        promiseState.textContent = "Pending...";
        promiseState.className = "badge-pending";
        screenDisplay.className = "screen";
        resultText.textContent = "Processing Division...";
        outOperation.textContent = n1 + " ÷ " + n2;
        outStatus.textContent = "Promise Pending";
        outStatus.className = "";
        outMessage.textContent = "Calculating...";

        // Call the arrow function returning a Promise
        divideNumbers(n1, n2)
            .then((result) => {
                // Promise Resolved successfully
                screenDisplay.className = "screen screen-success";
                promiseState.textContent = "Resolved";
                promiseState.className = "badge-resolved";
                resultText.textContent = "Result: " + result;

                outStatus.textContent = "Promise Resolved";
                outStatus.className = "text-green";
                outMessage.textContent = "Result: " + result;

                console.log("Web UI Division: " + n1 + " / " + n2 + " => Result: " + result);
            })
            .catch((error) => {
                // Promise Rejected with error
                screenDisplay.className = "screen screen-error";
                promiseState.textContent = "Rejected";
                promiseState.className = "badge-rejected";
                resultText.textContent = error;

                outStatus.textContent = "Promise Rejected";
                outStatus.className = "text-red";
                outMessage.textContent = "Error: " + error;

                console.log("Web UI Division: " + n1 + " / " + n2 + " => Error: " + error);
            });
    }

    // Form submit listener
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const n1 = parseFloat(num1Input.value);
        const n2 = parseFloat(num2Input.value);

        if (isNaN(n1) || isNaN(n2)) {
            alert("Please enter valid numbers.");
            return;
        }

        calculateDivision(n1, n2);
    });

    // Preset button click listeners
    presetButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const n1 = parseFloat(btn.getAttribute("data-n1"));
            const n2 = parseFloat(btn.getAttribute("data-n2"));
            num1Input.value = n1;
            num2Input.value = n2;
            calculateDivision(n1, n2);
        });
    });

    // Reset listener
    form.addEventListener("reset", function () {
        setTimeout(function () {
            num1Input.value = 10;
            num2Input.value = 2;
            calculateDivision(10, 2);
        }, 0);
    });

    // Initial calculation on page load (10 / 2)
    calculateDivision(10, 2);
}
