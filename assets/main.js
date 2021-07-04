function main() {
    "use strict";
    var counter = 0, all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const myname = "James Gasek"
    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            console.log(counter)
            var text = document.getElementById("matrix");
            text.innerHTML = text.innerHTML + myname.charAt(counter)
            counter = (counter+1);
        }, i * 60)
    }
}
window.onload = main;