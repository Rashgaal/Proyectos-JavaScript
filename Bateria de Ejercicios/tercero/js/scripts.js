"use strict"

window.onload = () => {

    const hacer = document.getElementById("hacer");
    hacer.addEventListener("click", function () {
        const styleSheet = document.styleSheets[0];

        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            if (styleSheet.cssRules[i].selectorText === ".parrafo") {
                styleSheet.deleteRule(i);
                styleSheet.insertRule(".parrafo { color: darkgrey; background-color: lightgreen; font-family: 'Courier New', Courier, monospace; font-size: larger; }", i);
                /*
                styleSheet.insertRule(".parrafo { color: darkgrey;}", styleSheet.cssRules.length);
                styleSheet.insertRule(".parrafo { background-color: lightgreen;}", styleSheet.cssRules.length);
                styleSheet.insertRule(".parrafo { font-family: 'Courier New', Courier, monospace;}", styleSheet.cssRules.length);
                styleSheet.insertRule(".parrafo { font-size: larger;}", styleSheet.cssRules.length);*/
            }
        }
    });
}