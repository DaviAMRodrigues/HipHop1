// Obtenha elementos HTML
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const audio1 = document.getElementById('audio1');
const NWA = document.getElementById('NWA');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botao4 = document.getElementById('botao4');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');
const audio4 = document.getElementById('audio4');
const audio5 = document.getElementById('audio5');
const on1 = document.getElementById('on1');
const off1 = document.getElementById('off1');
const eazy1 = document.getElementById('eazy1');
const on2 = document.getElementById('on2');
const off2 = document.getElementById('off2');
const eazy2 = document.getElementById('eazy2');
const on3 = document.getElementById('on3');
const off3 = document.getElementById('off3');
const video = document.getElementById('video');
const msgmusica = document.getElementById('msgmusica');
const msg1 = document.getElementById('msg1');

// Adicione ouvintes de eventos

// Quando a primeira imagem é clicada
image1.addEventListener('click', () => {
    // Oculte a mensagem 1
    msg1.classList.add('hidden');
    // Oculte a imagem 1
    image1.classList.add('hidden');
    // Mostre a imagem 2
    image2.classList.remove('hidden');
    // Mostre o áudio1
    audio1.classList.remove('hidden');
    // Mostre NWA
    NWA.classList.remove('hidden');
});

// Quando o botão 1 é clicado
botao1.addEventListener('click', () => {
    audio2.play();
});

// Quando o botão 2 é clicado
botao2.addEventListener('click', () => {
    audio3.play();
});

// Quando o botão 3 é clicado
botao3.addEventListener('click', () => {
    audio4.play();
});

// Quando o botão 4 é clicado
botao4.addEventListener('click', () => {
    audio5.play();
});

// Quando o botão "off1" é clicado
off1.addEventListener('click', () => {
    // Oculte o botão "off1"
    off1.classList.add('hidden');
    // Mostre o botão "on1"
    on1.classList.remove('hidden');
    // Reproduza o áudio do eazy1
    eazy1.play();
    // Atualize a mensagem de música
    msgmusica.textContent = 'Mó deprê a música, tenta reiniciar!';
});

// Quando o botão "on1" é clicado
on1.addEventListener('click', () => {
    // Oculte o botão "on1"
    on1.classList.add('hidden');
    // Mostre o botão "off2"
    off2.classList.remove('hidden');
    // Pausar o áudio do eazy1
    eazy1.pause();
});

// Quando o botão "off2" é clicado
off2.addEventListener('click', () => {
    // Oculte o botão "off2"
    off2.classList.add('hidden');
    // Mostre o botão "on2"
    on2.classList.remove('hidden');
    // Reproduza o áudio do eazy2
    eazy2.play();
    // Atualize a mensagem de música
    msgmusica.textContent = 'Baixo daora, mas não é o que a gente precisa.';
});

// Quando o botão "on2" é clicado
on2.addEventListener('click', () => {
    // Oculte o botão "on2"
    on2.classList.add('hidden');
    // Mostre o botão "off3"
    off3.classList.remove('hidden');
    // Pausar o áudio do eazy2
    eazy2.pause();
});

// Quando o botão "off3" é clicado
off3.addEventListener('click', () => {
    // Oculte o botão "off3"
    off3.classList.add('hidden');
    // Reproduza o vídeo
    video.play();
    // Mostre o vídeo
    video.classList.remove('hidden');
    // Atualize a mensagem de música
    msgmusica.textContent = 'É essa mesmo!';
});

// Quando o vídeo é clicado
video.addEventListener('click', () => {
    // Verifique se o vídeo está pausado e ação de reprodução ou pausa
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Quando a terceira imagem é clicada
image3.addEventListener('click', () => {
    // Oculte a imagem 3
    image3.classList.add('hidden');
    // Mostre a imagem 4
    image4.classList.remove('hidden');
});






