document.addEventListener("DOMContentLoaded", function () {
    // Get references to the front and back elements
    const frontElement = document.querySelector(".front");
    const backElement = document.querySelector(".back");

    // Get references to the buttons
    const blueButton = document.querySelector(".blue");
    const redButton = document.querySelector(".red");
    const greenButton = document.querySelector(".green");
    const blackButton = document.querySelector(".black");
    const purpleButton = document.querySelector(".purple");
    const rossGoldButton = document.querySelector(".rossGold");
    const yellowButton = document.querySelector(".yellow");

    // Add click event listeners to the buttons
    blueButton.addEventListener("click", function () {
        changeColors("#186bd0", "#90c0fb", "#30383b"); // Change to your desired colors
    });

    redButton.addEventListener("click", function () {
        changeColors("#f70c3d", "#f62956", "#30383b");
    });

    greenButton.addEventListener("click", function () {
        changeColors("#0ea57f", "#52a893", "#30383b");
    });

    blackButton.addEventListener("click", function () {
        changeColors("#0e0e0e", "#121212", "#ababab");
    });

    purpleButton.addEventListener("click", function () {
        changeColors("#7a3f75", "#cc6bc4", "#30383b");
    });

    rossGoldButton.addEventListener("click", function () {
        changeColors("#df9572", "#df9572", "#30383b");
    });

    yellowButton.addEventListener("click", function () {
        changeColors("#fcb736", "#fed27f", "#30383b");
    });

    // Function to change colors
    function changeColors(frontColor, backColor, fontColor) {
        frontElement.style.backgroundColor = frontColor;
        backElement.style.backgroundColor = backColor;
        backElement.style.color = fontColor;
    }
    });