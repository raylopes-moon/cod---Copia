const nuvem = document.querySelector('.kiki');
const imagem = document.querySelector('img.kiki');
imagem.style.transform = 'scaleX(-1)';

let x = 0;
let velocidade = 0.5;

function animar() {
  x += velocidade;
  nuvem.style.left = `${x}%`;

  if (x > 153) {
    x = -60; 
  }

  requestAnimationFrame(animar);
}

animar();

