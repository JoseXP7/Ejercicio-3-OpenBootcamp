let numero = 10
let factorial = numero

if (numero == 10) {
	while (numero > 1) {
		factorial = factorial * (numero - 1)
	    numero--
	    console.log("El factorial de 10 es " + factorial)
	    break
	}
}