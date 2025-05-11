let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');
const yesBtn = document.getElementById('yesBtn');
const loveMessage = document.getElementById('loveMessage');

// Função para o slideshow
function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000);

// Função para criar corações caindo
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 500);

// Função para o player de música
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '⏸️';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '▶️';
  }
});

// Função para exibir mensagem com confete
yesBtn.addEventListener('click', () => {
  loveMessage.style.display = 'block';
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});