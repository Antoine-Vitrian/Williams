const pilotos = document.getElementById('pilotos');
const construtores = document.getElementById('construtores');

function mostrarPilotos() {
    pilotos.style.display = 'block';
    construtores.style.display = 'none';
}
function mostrarConstrutores() {
    pilotos.style.display = 'none';
    construtores.style.display = 'block';
}