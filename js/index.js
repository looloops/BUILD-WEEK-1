const button = document.getElementById("proceedButton");
const checkbox = document.getElementById("myCheckbox");

function brightColour() {
    if (checkbox.checked) {
        button.disabled = false;
        button.classList.add("btn");  
    } else {
        button.disabled = true;
        button.classList.remove("btn");
    } 
}

document.getElementById("proceedButton").addEventListener("click", function() {
    window.location.href = './benchmark.html';
});