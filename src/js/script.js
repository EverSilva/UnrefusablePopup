window.addEventListener('load', () => {
  const message = 'Quer namorar comigo 😍?';

  document.querySelector('#message-text').innerText = message;

  const buttons = {
    yes: document.querySelector('#yes'),
    no: document.querySelector('#no')
  };

  const song = new Audio('src/assets/audio/song.mp3');
  const button = document.querySelector('.play');
  document.addEventListener('click', () => {
    button = song.play();
  });

  buttons.yes.addEventListener('click', () => alert('Ownth 😍😍😍'));

  buttons.no.addEventListener('mouseover', e => {
    e.target.style.left = `${10 + Math.floor(Math.random() * 80)}%`;
    e.target.style.top = `${10 + Math.floor(Math.random() * 80)}%`;
  });
});
