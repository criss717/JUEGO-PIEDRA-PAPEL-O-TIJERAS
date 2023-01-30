alert("Elija por favor")
let pc=0; //valor de referencia: 1 para papel, 2 para pidra y 3 para tijera
let win=0; // contador
let empate=0 //contador
let lose=0; //contador
let elepc=""; //variable para mostrar eleccion de la PC en pantalla
let elejugador=""; //variable para mostrar eleccion del jugador en pantalla

function turnopc(){ // turno de la PC
     pc=Math.floor((Math.random() * 3) + 1); // random PC (1 para ✊, 2 para ✋, o 3 para ✂)
    if(pc==1) {  
       elepc="✊(piedra)"
      } else if(pc==2) {
        elepc="✋(papel)"
        }  else if(pc==3) {
            elepc="✂(tijeras)"
        }
}

function combate(){ //Combate donde muestra resultados en pantalla con una alert
if(pc==jugador) {
    alert( `Elegiste ${elejugador} \nEl pc elegió ${elepc} \nResultado: Empate 🤔`);
    empate++;
} else if(pc==1 && jugador==2 || pc==3 && jugador==1 || pc==2 && jugador==3) {
 alert(`Elegiste ${elejugador} \nEl pc elegió ${elepc}  \nResultado: Obtienes la victoria 🏆🏆`);
 win++
}else { 
    alert(`Elegiste ${elejugador} \nEl pc elegió ${elepc}  \nResultado: Derrota!! 😒🤮`)
    lose++
} 
}

//turno del jugador
let jugador;
console.log(jugador)
function piedra(){ //si elije piedra
    elejugador="✊(piedra)"
    jugador=1;
    turnopc();
    combate();
    resultados();
}
  
function papel(){ //si elije papel
    elejugador="✋(papel)"
    jugador=2;
    turnopc();
    combate();
    resultados();
}
function tijera(){ //si elije tijera
    elejugador="✂(tijeras)"
    jugador=3;
    turnopc();
    combate();
    resultados();
}


function resultados(){
    const empates=document.getElementById("empates");
    empates.innerHTML= `<h2> Empates: ${empate}</h2>` //imprimir # de empates
    const victorias=document.getElementById("wins");
    victorias.innerHTML= `<h2> Victorias: ${win}</h2>` //imprimir # de victorias
    const derrotas=document.getElementById("loses");
    derrotas.innerHTML= `<h2> Derrotas: ${lose}</h2>` //imprimir # de derrotas

}
   






