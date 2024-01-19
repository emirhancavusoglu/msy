let noButtonEnabled = true;

function changeGif(gifName) {
    if (noButtonEnabled) {
        document.getElementById('gif').src = gifName;
    }
}


function changeButtonPosition() {
    if (noButtonEnabled) {
        const noButton = document.getElementById('noButton');
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noButton.style.position = 'absolute';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';

        // İlk kez gelindiğinde üzgün.gif olarak değiştir
        noButtonEnabled = false;
        document.getElementById('gif').src = 'uzgun.gif';

        // Butonun konumunu sürekli değiştirmesi için setTimeout kullanalım
        setTimeout(() => {
            noButtonEnabled = true;
        }, 100);
    }
}

function resetGif() {
    noButtonEnabled = true;
    document.getElementById('gif').src = 'merakli.gif';
}

function sayHastaLaVista() {
    var h1Elementi = document.getElementById("baslik");
            var yeniMetin = "Hasta la vista Baby !!!";
            h1Elementi.innerHTML = yeniMetin;
            document.getElementById('gif').src = 'son.gif';
}
