window.onload = () => {
  confetti({
    particleCount: 250,
    spread: 120,
    origin: { y: 0.6 },
    colors: ['#ffaad4', '#ffd5ec', '#ff91c4']
  });
};

function showMessage() {
  const message = document.getElementById('message');
  message.style.display = 'block';
  confetti({
    particleCount: 180,
    spread: 140,
    origin: { y: 0.8 },
    colors: ['#ffaad4', '#ffd5ec', '#ff91c4']
  });
}
