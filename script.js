// Part 2: JavaScript Functions

// Function to double a number (demonstrates parameters and return value)
function doubleNumber(num) {
    return num * 2;
}

// Event listener for the double number button
document.getElementById("doubleBtn").addEventListener("click", () => {
    const input = document.getElementById("numInput").value;
    const result = doubleNumber(Number(input)); // Using function with parameter
    document.getElementById("result").textContent = result;
});

// Part 3: CSS + JS Animation Trigger

// Function to toggle animation on the box
function animateBox(box) {
    // Add a class or inline style dynamically
    box.style.backgroundColor = getRandomColor();
    box.style.transform = "translateX(200px) rotate(20deg)";

    // Reset after 1s
    setTimeout(() => {
        box.style.transform = "translateX(0) rotate(0)";
        box.style.backgroundColor = "#ff5733";
    }, 1000);
}

// Function to get a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for animate button
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", () => {
    animateBox(box);
});
