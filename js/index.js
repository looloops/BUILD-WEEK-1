const button = document.getElementById("proceedButton");
const checkbox = document.getElementById("myCheckbox");

/* function brightColour() {
    if (checkbox.checked) {
        button.disabled = false;
        button.classList.add("buttonChecked"); 
    } else {
        button.disabled = true;
        button.classList.remove("buttonChecked");
    }
} */


document.getElementById("proceedButton").addEventListener("click", function() {
    window.location.href = './benchmark.html';
});