const evento = document.getElementById('send')
const enviarFormulario = () => {

        let numero = document.getElementById('numero').value;

var win = window.open(`https://www.google.com/search?q=${numero}`, '_blank');
}
evento.addEventListener('click', enviarFormulario)
