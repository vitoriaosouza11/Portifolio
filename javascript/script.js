const lightbox = document.getElementById('lightbox');
const fechar = document.querySelector('.fechar');

const lbImg = document.getElementById('lb-img');
const lbTitulo = document.getElementById('lb-titulo');
const lbAno = document.getElementById('lb-ano');
const lbDesc = document.getElementById('lb-desc');
const lbLink = document.getElementById('lb-link');

document.querySelectorAll('.botao-fullscreen').forEach(btn => {
  btn.addEventListener('click', () => {
    lbImg.src = btn.dataset.img;
    lbTitulo.textContent = btn.dataset.title;

    const mesAno = btn.dataset.mesAno || 'Maio 2025';
    lbAno.textContent = `${mesAno}`;

    lbDesc.textContent = btn.dataset.desc;
    lbLink.href = btn.dataset.link;

    // Abre lightbox
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

fechar.addEventListener('click', () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = '';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }
});


const cursorLight = document.querySelector('.cursor-light');

let mouseX = 0;
let mouseY = 0;
let lightX = 0;
let lightY = 0;

const offset = 100; // metade do tamanho da bolinha (20px / 2)

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - offset;
    mouseY = e.clientY - offset;
});

function animateLight() {
    lightX += (mouseX - lightX) * 0.2;
    lightY += (mouseY - lightY) * 0.2;

    cursorLight.style.left = lightX + 'px';
    cursorLight.style.top = lightY + 'px';

    requestAnimationFrame(animateLight);
}

animateLight();
