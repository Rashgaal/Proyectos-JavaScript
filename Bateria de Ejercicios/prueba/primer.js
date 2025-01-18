"use strict"

window.onload = () => {

    const cambiar = document.getElementById("cambiar");
    cambiar.addEventListener("click", function () {
        const styleSheet = document.styleSheets[0];
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            if (styleSheet.cssRules[i].selectorText === ".inicio") {
                styleSheet.cssRules[i].style.color = "red";
                styleSheet.cssRules[i].style.fontSize = "small";
            }
        }
    });

};

