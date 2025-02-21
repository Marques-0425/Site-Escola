document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    dropdownButton.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", function () {
            dropdownButton.innerHTML = `<img src="${this.children[0].src}" alt="${this.dataset.value}" width="20"> ${this.dataset.value}`;
            dropdownMenu.classList.remove("show");
        });
    });

    document.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});


const fotos = document.querySelector('.fotos');
const indicadores = document.querySelectorAll('.indicador');
let index = 0;

function trocarFoto() {
    // Avança para a próxima foto
    index = (index + 1) % 3; // 3 é o número de fotos

    // Move o contêiner de fotos para a esquerda
    fotos.style.transform = `translateX(-${index * 100}%)`;

    // Atualiza os indicadores
    atualizarIndicadores();
}

function atualizarIndicadores() {
    indicadores.forEach((indicador, i) => {
        if (i === index) {
            indicador.classList.add('ativo');
        } else {
            indicador.classList.remove('ativo');
        }
    });
}

// Adiciona eventos de clique aos indicadores
indicadores.forEach((indicador, i) => {
    indicador.addEventListener('click', () => {
        index = i;
        fotos.style.transform = `translateX(-${index * 100}%)`;
        atualizarIndicadores();
    });
});

// Troca a foto a cada 3 segundos (3000 ms)
setInterval(trocarFoto, 5000);