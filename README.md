# js-ejercicios-calculadora-venta-entradas-LUIS_ALEXANDER
"EJERCICIO DE VENTA DE ENTRADAS"
                    HTML
- Estructura General: Página web que permite calcular el precio de una entrada según la edad ingresada por el usuario.

- Sección <head>: Contiene metadatos, el título de la página y un enlace a la hoja de estilos (venta-entradas.css).

Sección <body>: Incluye un formulario con un campo de entrada para la edad, un botón para calcular el precio y párrafos para mostrar el resultado o mensajes de error.

JavaScript (<script>): Enlaza el archivo venta-entradas.js, donde se define la lógica para calcular el precio de la entrada.

                CSS
- body: Usa la fuente Arial, centra el contenido, aplica un margen de 50px y un fondo verde claro.
- h1: El título se muestra en color rojo.
.container: Establece un ancho máximo de 400px, centra el contenido, añade relleno, bordes redondeados y una sombra ligera.
input, button: Tienen margen, relleno y ocupan el 100% del ancho disponible.
.error: Muestra los mensajes de error en rojo.
                JAVASCRIPT
1. Obtiene la edad ingresada desde el campo <input> y limpia espacios innecesarios.
2. Limpia los mensajes anteriores (resultado y error).
3. Valida la entrada:
- Si el campo está vacío, muestra un error.
- Si no es un número o es menor o igual a 0, muestra otro error.
4. Calcula el precio según la edad:
- Menores de 12 años: Entrada gratuita.
- Entre 12 y 18 años: Precio reducido.
- Mayores de 18 años: Precio completo.

Estas son algunas pruebas que hize para comprobar que los parametros que pedia el ejercicio se cumplian



