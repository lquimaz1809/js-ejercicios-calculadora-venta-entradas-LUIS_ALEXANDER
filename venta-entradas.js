function calcularPrecio() {
    let edadInput = document.getElementById("edad").value.trim();
    let resultado = document.getElementById("resultado");
    let error = document.getElementById("error");

    resultado.textContent = "";
    error.textContent = "";

    if (edadInput === "") {
        error.textContent = "Por favor, ingrese una edad.";
        return;
    }

    let edad = Number(edadInput);

    if (isNaN(edad) || edad <= 0) {
        error.textContent = "Ingrese una edad válida (número positivo).";
        return;
    }

    if (edad < 12) {
        resultado.textContent = "La entrada es gratuita.";
    } else if (edad <= 18) {
        resultado.textContent = "La entrada tiene precio reducido.";
    } else {
        resultado.textContent = "La entrada tiene precio completo.";
    }
}
