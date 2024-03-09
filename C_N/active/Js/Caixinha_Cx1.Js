var agora = (new Date());

let Horas = ((String(agora.getHours())).padStart(2,'0'));
let Minus = ((String(agora.getMinutes())).padStart(2,'0'));
let Segns = ((String(agora.getSeconds())).padStart(2,'0'));
let Dia = ((String(agora.getDate())).padStart(2,'0'));
let Mes = ((String(agora.getMonth()+1)).padStart(2,'0'));
let Ano = ((String(agora.getFullYear())).padStart(2,'0'));

const Relogio = document.getElementById("Relogio");
const Calendario = document.getElementById("Calendario");


function Time(time){
    Relogio.textContent = [Horas,Minus,Segns].join(':');
    Calendario.textContent = [Dia,Mes,Ano].join('/');
}


setInterval(Time,1000);