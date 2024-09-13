
function letsPlay(player1,player2) {
    player1 = player1.toUpperCase();
    player2 = player2.toUpperCase();
    if (player1 !== "T" && player1 !== "P" && player1 !== "PA" || 
        player2 !== "T" && player2 !== "P" && player2 !== "PA"){
        throw new TypeError("LOS JUGADORES DEBEN INGRESAR SOLAMENTE P(PIEDRA), PA(PAPEL) O T(TIJERAS)")
    }else{

        if(player1 === player2){

            return "Empate";

        }else if ((player1 === "T" && player2 === "PA") || (player1 === "PA" && player2 === "P") || (player1 === "P" && player2 === "T")){

            return "Jugador 1 gana";

        } else {

            return "Jugador 2 gana";

        }
    }


}


module.exports={letsPlay}

