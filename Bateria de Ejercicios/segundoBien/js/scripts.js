"use strict"

window.onload = () => {

    const hacer = document.getElementById("hacer");
    hacer.addEventListener("click", function () {
        const styleSheet = document.styleSheets[0];
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            if (styleSheet.cssRules[i].selectorText === ".titulo") {
                styleSheet.cssRules[i].style.setProperty("font-size", "xx-large")
            }
            if (styleSheet.cssRules[i].selectorText === ".parrafo") {
                styleSheet.cssRules[i].style.setProperty("font-style", "oblique")
            }
        }
    });
}