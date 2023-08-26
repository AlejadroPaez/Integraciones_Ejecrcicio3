function Calcular() {
    numero = document.getElementById("dato1").value ;
    resultado = 1;
    cadena = "";

    if(numero != "" && numero > 0){
        i = numero;
        while (i > 0) {
            cadena = cadena + " * " + i;
            resultado = resultado * i;
            --i;  
        }
        
        document.getElementById("tituloResultado").innerHTML = "Mensaje: El factorial de " + numero + " es igual a " + resultado;
        document.getElementById("calculoResultado").innerHTML = "Cálculo del factorial de " + numero;
        document.getElementById("OperacionResultado").innerHTML = numero + "! = " + cadena.substr(2);
        document.getElementById("Resultado").innerHTML = numero + "! = " + resultado;
        document.getElementById("contenido").style.display = "none";
        document.getElementById("divResultado").style.display = "flex";
        
    }else{
        alert("Introduce un valor valido");        
        document.getElementById("dato1").style.boxShadow = "0px 5px 15px rgba(255, 0, 0, 0.40)";
    }        
}

function Regresar() {
    document.getElementById("dato1").value = "";
    document.getElementById("divResultado").style.display = "none";
    document.getElementById("contenido").style.display = "flex";
    document.getElementById("dato1").style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";
}