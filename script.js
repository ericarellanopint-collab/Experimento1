// arreglo para ir guardando a los alumnos metidos en la lista
let listaAlumnos = [];

// funcion principal para agregar un nuevo alumno a la lista
function agregarAlumno() {
    // se declara una variable llamada nombre que busca dentro del html
    // el id=nombre y se sacan los datos de texto de ese input
    let nombre = document.getElementById("nombre").value;
    // pasa lo mismo con la edad, se busca el elemento por id y se extrae su valor
    let edad = document.getElementById("edad").value;

    // se crea la variable calificacion1 que guarda el resultado final,
    // el parsefloat es una funcion que convierte los datos de calificacion1 
    // en numero decimal y no en texto, para poder hacer el promedio
    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );

    // se hace validar que los datos estén completos,
    // el "isNaN" es por si las calif NO son num, si no lo es,
    // pues nos pide que pongamos parametros correctos.
    if (
        nombre === "" ||
        edad === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {
        // se busca el elemento con id=resultado y cambia el texto dentro de
        // ese elemento con lo que está dentro de las comillas
        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";
        // hace que ya no continue el proceso hasta que pues se llene bien todo
        return;
    }

    // se hace guardar el alumno en el arreglo, el .push es el metodo
    // que pone los datos al final del arreglo, los objetos son los 
    // primeros que salen y sus valores los que siguen despues del :
    listaAlumnos.push({
        nombre: nombre,
        edad: edad,
        calificacion1: calificacion1,
        calificacion2: calificacion2,
        calificacion3: calificacion3,
        calificacion4: calificacion4
    });

    // el .reset es un metodo para limpiar todo el formulario completo
    // y dejar que las cajas vacias para guardar el siguiente alumno
    document.getElementById("formularioCalificaciones").reset();

    // mensaje de confirmacion de la captura de los datos,
    // el .length cuenta cuantos elementos llevamos guardados en el arreglo
    // y el <strong> hace enfasis y lo pone en negritas
    document.getElementById("resultado").innerHTML =
        "Alumno <strong>" + nombre + "</strong> agregado correctamente. Total guardados: " + listaAlumnos.length;
}

// funcion para hacer la suma y el promedio de cada alumno guardado
function calcularPromedio() {
    // valida que el arreglo no ande vacio antes de calcular,
    // si .length es igual a 0 significa que no se ha agregado a nadie
    if (listaAlumnos.length === 0) {
        // busca el id=resultado y muestra el mensaje de alerta en la pantalla
        document.getElementById("resultado").innerHTML = "No has agregado ningún alumno todavía.";
        // detiene la funcion para no ejecutar el ciclo for 
        return;
    }

    // variable vacia para ir guardando el html de todos los alumnos
    let acumuladoResultados = "";

    // recorremos TODOS los alumnos guardados en el arreglo usando el ciclo for,
    // la variable i empieza en 0 y va aumentando hasta llegar al total de alumnos
    for (let i = 0; i < listaAlumnos.length; i++) {
        // sacamos los datos del alumno en la posicion i actual
        let nombre = listaAlumnos[i].nombre;
        let edad = listaAlumnos[i].edad;
        let calificacion1 = listaAlumnos[i].calificacion1;
        let calificacion2 = listaAlumnos[i].calificacion2;
        let calificacion3 = listaAlumnos[i].calificacion3;
        let calificacion4 = listaAlumnos[i].calificacion4;

        // se suman las 4 notas obtenidas y se dividen entre 4 para el promedio final
        let promedio =
            (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

        // variable donde guardaremos el texto y las etiquetas html de cada alumno
        let textoAlumno = "";

        // condicionales para asignar un mensaje segun el promedio obtenido,
        // el .toFixed(2) es un metodo para recortar los decimales y que
        // solo salgan 2 numeros despues del punto
        if (promedio >= 9) 
        {
            textoAlumno =
                "<strong>Alumno:</strong> " + nombre + " " +
                "<strong>Edad:</strong> " + edad +
                "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                "<br><br>Exelente";
        } 
        else
        {
            if (promedio >= 8 && promedio <8.9) 
            {
                textoAlumno =
                    "<strong>Alumno:</strong> " + nombre + " " +
                    "<strong>Edad:</strong> " + edad +
                    "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                    "<br><br>Muy bien";
            } 
            
            if (promedio >= 7 && promedio <7.9) 
            {
                textoAlumno =
                    "<strong>Alumno:</strong> " + nombre + " " +
                    "<strong>Edad:</strong> " + edad +
                    "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                    "<br><br>Bien";
            } 
            
            if (promedio >= 6.5 && promedio <6.9) 
            {
                textoAlumno =
                    "<strong>Alumno:</strong> " + nombre + " " +
                    "<strong>Edad:</strong> " + edad +
                    "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                    "<br><br>Piensa en conta";
            }
            
            if (promedio >= 6 && promedio <6.4) 
            {
                textoAlumno =
                    "<strong>Alumno:</strong> " + nombre + " " +
                    "<strong>Edad:</strong> " + edad +
                    "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                    "<br><br>Date de baja";
            }
            
            if (promedio >= 0 && promedio <5.9) 
            {
                textoAlumno =
                    "<strong>Alumno:</strong> " + nombre + " " +
                    "<strong>Edad:</strong> " + edad +
                    "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                    "<br><br>Vete a la UNAM";
            } 
        }

        // se va concatenando la informacion de CADA alumno dentro de un div,
        // el += sirve para ir pegando cada nuevo resultado sin borrar el anterior
        // y la etiqueta hr pone una linea separadora entre cada uno
        acumuladoResultados += "<div>" + textoAlumno + "</div><hr>";
    }

    // se imprime el resultado completo acumulado en pantalla cambiando el innerHTML
    document.getElementById("resultado").innerHTML = acumuladoResultados;
}
