// Fungsi dan event listeners
function onLoadFunction() {
    console.log("Page Loaded");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Data Loaded: ", xhr.responseText);
        }
    };
    xhr.send();
}

function showAlert() {
    alert("Button Clicked!");
}

// Event listeners
window.addEventListener('load', onLoadFunction);
document.getElementById('alertButton').addEventListener('click', showAlert);

// Manipulasi DOM setelah halaman siap
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("infoDiv").innerHTML += "<p>Hello World</p>";
});
