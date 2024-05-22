const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const data = document.getElementById('date');

const relogio = setInterval(function time() {
    let dateToday = new Date();

    //Formatar para o horario com 2digitos
    let hr = dateToday.getHours().toString().padStart(2, '0');
    let min = dateToday.getMinutes().toString().padStart(2, '0');
    let sec = dateToday.getSeconds().toString().padStart(2, '0');
    let dat = dateToday.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    data.textContent = dat;


})