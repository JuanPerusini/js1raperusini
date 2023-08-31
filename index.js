function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    const dolar = 725;
    const euro = 730;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de pesos a dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de pesos a euros es: $" + resultado.toFixed(2));
    }
    else{
        alert ("Completar los campos");
    }

    
}