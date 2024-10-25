const pilotos = document.getElementById('pilotos');
const construtores = document.getElementById('construtores');
const im = document.getElementById('im');

function mostrarPilotos() {
    pilotos.style.display = 'block';
    construtores.style.display = 'none';
    im.style.height = '1310px'
}
function mostrarConstrutores() {
    pilotos.style.display = 'none';
    construtores.style.display = 'block';
    im.style.height = '690px'
}