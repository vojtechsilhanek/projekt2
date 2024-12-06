document.addEventListener("DOMContentLoaded", function () {
    window.tempConverter = function(number) {
        
        document.querySelector("#outputCelsius").innerHTML = (number * 1.8) + 32;
    };
     
});


