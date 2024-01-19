let noButtonEnabled = true;

function changeGif(gifName) {
    document.getElementById('gif').src = gifName;
    noButtonEnabled = false;
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
