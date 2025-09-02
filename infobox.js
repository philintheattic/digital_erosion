const infoButton = document.getElementById('infoButton');

function showInfo() {
    var infoBox = document.getElementById('info');
    if (infoBox.classList.contains('hidden')) {
        infoBox.classList.remove('hidden');
    } else {
        infoBox.classList.add('hidden');
    }
}

infoButton.addEventListener("click", function(e) {
    showInfo();
})