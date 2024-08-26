function dividir(valor1, valor2) {
    // Convertir los valores a números
    let num1 = Number(valor1);
    let num2 = Number(valor2);
    
    // Comprobar si el divisor es cero
    if (num2 === 0) {
        return "Error: División por cero no permitida.";
    }
    
    // Realizar la división y devolver el resultado
    return num1 / num2;
}

function sumar(valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function restar(valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function multiplicar(valor1, valor2) {
    return Number(valor1) * Number(valor2);
}

let valor1;
let valor2;
let operacion = "";

// Bucle principal
do {
    operacion = prompt("¿Qué operación quieres realizar? Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.");

    // Validar la operación
    while (operacion != "suma" && operacion != "resta" && operacion != "multiplicación" && operacion != "división" && operacion != "salir") {
        alert("Operación no reconocida. Por favor, responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.");
        operacion = prompt("¿Qué operación quieres realizar? Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.");
    }

    if (operacion === "salir") {
        break;
    }

    valor1 = prompt("Ingrese el valor #1");
    valor2 = prompt("Ingrese el valor #2");

    let resultado;
    switch (operacion) {
        case "suma":
            resultado = sumar(valor1, valor2);
            break;
        case 'resta':
            resultado = restar(valor1, valor2);
            break;
        case 'multiplicación':
            resultado = multiplicar(valor1, valor2);
            break;
        case 'división':
            resultado = dividir(valor1, valor2);
            break;
    }

    alert(`El resultado de la ${operacion} es ${resultado}`);

} while (operacion === "suma" || operacion === "resta" || operacion === "multiplicación" || operacion === "división");

alert("¡Hasta la próxima!");
