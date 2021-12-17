function muestra_tablero(tablero) {
    var salida = "Estado del tablero:\n";
    for (var i = 0; i < tablero.length; i++) {
        for (var j = 0; j < tablero[i].length; j++) {
            salida = salida + tablero[i][j] + " "
        }
        salida = salida + "\n";
    }
    console.log(salida);
}

function introducirOoX() {
    var tablero = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]
    muestra_tablero(tablero)

    for (i = 0; i < 9; i++) {
        let caracter = i % 2 == 0 ? "X" : "O";
        let respuesta_fila = simple_user_input("¿En que fila quieres poner la " + caracter + "?");
        let respuesta_columna = simple_user_input("¿En que columna quieres poner la " + caracter + "?");

        if (tablero[respuesta_fila][respuesta_columna] != "-") {
            alert("Ese hueco ya está ocupado")
            i--;
        } else {
            tablero[respuesta_fila][respuesta_columna] = caracter
            muestra_tablero(tablero)
        }
    }
}
introducirOoX()

