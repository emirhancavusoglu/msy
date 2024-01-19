// public/script.js

function changePosition() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
  
    // Yeni rastgele pozisyonlar oluştur
    const newX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const newY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
  
    // Yeni pozisyonu ayarla
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
  
    // Yeni pozisyonun container içinde olmasını sağla
    container.appendChild(noButton);
  }
  