const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function changeImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(changeImage, 3000);

const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');
const loveMessage = document.getElementById('loveMessage');

yesBtn.addEventListener('click', () => {
  message.style.display = 'block';
  loveMessage.style.display = 'block';
  setTimeout(() => {
    loveMessage.style.display = 'none';
  }, 12000); // A mensagem some após 12 segundos
});

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  } else {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  const centerRange = 100;
  heart.style.left = (Math.random() * centerRange + (50 - centerRange / 2)) + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Função para exibir mensagem com confete
yesBtn.addEventListener('click', () => {
  loveMessage.style.display = 'block';
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});