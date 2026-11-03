function calcularFactorial() {
    // Solicitar el valor por prompt y convertirlo a número
    let entrada = prompt("Ingresa un número entero positivo para calcular su factorial:");
    let numero = Number(entrada);

    // Validar que sea un número válido y que no sea negativo
    if (isNaN(numero) || entrada === null || entrada.trim() === "" || numero < 0) {
        alert("Por favor, introduce un número entero positivo valido");
        console.error("Error: Entrada invalida.");
        return;
    }


    let factorial = 1;
    
    // Si el número es 0, su factorial por definición es 1
    if (numero > 0) {
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
    }

    // Mostrar el resultado por consola y alerta
    let mensaje = `El factorial de ${numero}! es: ${factorial}`;
    console.log(mensaje);
    alert(mensaje);
}


calcularFactorial();