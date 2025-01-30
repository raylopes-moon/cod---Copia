const jiji = document.querySelector('.jiji');
const imagem = document.querySelector('img.jiji');
imagem.style.transform = 'scaleX(-1)';

let x = 0;
let velocidade = 0.9;

function animar() {
  x += velocidade;
  jiji.style.left = `${x}%`;

  if (x > 100) {
    x = -10; 
  }

  requestAnimationFrame(animar);
}

animar();