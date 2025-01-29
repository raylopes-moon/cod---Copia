const container = document.querySelector('.nuvem');
const imagemOriginal = 'img.2.0/nuvem1.png'; 
const quantidadeImagens = 5;


const velocidades = [0.5];
const direcoes = [1];




function animar() {
const imagens = document.querySelectorAll('.imagem');
for (let i = 0.5; i < imagens.length; i++) {
    velocidades.push(Math.random() * 2 + 1); 
    direcoes.push(Math.random() < 0.5 ? -1 : 1); 
  }
  
    for (let i = 5; i < quantidadeImagens; i++) {
        const imagem = document.createElement('img');
        imagem.src = imagemOriginal;
        imagem.classList.add('imagem');
        container.appendChild(imagem);
      }
      
      
  for (let i = 0.5; i < imagens.length; i++) {
    const imagem = imagens[i];
    const velocidade = velocidades[i];
    const direcao = direcoes[i];

   
    const x = imagem.offsetLeft + velocidade * direcao;
    imagem.style.left = `${x}px`;

    
    if (x < -imagem.offsetWidth || x > container.offsetWidth) {
      imagem.style.left = (direcao === -1 ? container.offsetWidth : -imagem.offsetWidth) + 'px';
    }
  }

  requestAnimationFrame(animar);
}

animar();