// Function to generate a random set of numbers
function generateRandomNumbers(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const num = Math.floor(Math.random() * 100) + 1;  // Generates a random number between 1 and 100
        randomNumbers.push(num);
    }
    return randomNumbers;
}

// Generate 10 random numbers
const randomNumbers = generateRandomNumbers(10);
document.getElementById("random-numbers").innerText = "Random Numbers: " + randomNumbers.join(", ");

// Print the current date
const currentDate = new Date().toISOString().split('T')[0];
document.getElementById("current-date").innerText = "Current Date: " + currentDate;

// Generate a random float and round it
const randomFloat = (Math.random() * 100) + 1;  // Generates a random float between 1 and 100
const roundedRandomNumber = randomFloat.toFixed(2);  // Round to 2 decimal places
document.getElementById("rounded-random-number").innerText = "Rounded Random Number: " + roundedRandomNumber;