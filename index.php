<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="js/operaciones.js"></script>
    <link href="css/estilos.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div id="contenido">
        <div>
            <h1>Introduce un dato</h2>
            <label for="dato1">Obtener factorial del número: </label><br>
            <input type="number" name="dato1" id="dato1"><br>
            <button id="procesar" onclick="Calcular()">Caluclar</button>
        </div>       
    </div>    
    <div id="divResultado">
        <div>
            <h1>Resultado</h2>
            <label id="tituloResultado"></label><br>
            <label id="calculoResultado"></label><br>
            <label id="OperacionResultado"></label><br>
            <label id="Resultado"></label><br>
            <button id="regresar" onclick="Regresar()">Regresar</button>
        </div>       
    </div>      
</body>
</html>



