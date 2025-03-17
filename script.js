// script.js
function validateNumber() {
    let input = document.getElementById("inputNumber").value.trim();
    let scientificRegex = /^[+-]?\d+(\.\d+)?(e[+-]?\d+)?$/i;
    
    if (scientificRegex.test(input)) {
        document.getElementById("message").textContent = "Yes, it is a number";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "No, it is not a number";
        document.getElementById("message").style.color = "red";
    }
}
