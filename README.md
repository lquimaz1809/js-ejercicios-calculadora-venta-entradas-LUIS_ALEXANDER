# js-ejercicios-calculadora-venta-entradas-LUIS_ALEXANDER
EJERCICIO CALCUALADORA
                HTML
Este HTML define una interfaz para una calculadora. Tiene un formulario con un campo de texto para mostrar resultados y botones organizados en una tabla. Los botones están divididos en números (1-9, 0) y operaciones matemáticas (suma, resta, multiplicación, división y borrar). Además, incluye un script externo (calculadora.js) para manejar la lógica de la calculadora.
                    CSS
Este CSS estiliza la calculadora. Aquí está lo más importante:

- El fondo de la página tiene un gradiente de colores magenta a tomate.
- Se usan estilos de diseño flexible (`flex`) para centrar la calculadora en la pantalla.
- La tabla de la calculadora tiene bordes colapsados y ocupa 300px de altura.
- Los botones y el campo de texto (`input`) tienen un tamaño que ocupa el 100% de su celda, con fuentes grandes y negritas.
- El campo de texto tiene un fondo oscuro y los números se alinean a la derecha.
- Los botones cambian de color al pasar el ratón por encima y tienen un efecto de escala al hacer clic, con sombras suaves.
- Los botones de operaciones (como suma, resta) tienen colores específicos (rojo, azul, verde), con el botón de igual siendo verde y destacándose más.  
                    JAVASCRIPT
Este JavaScript maneja la lógica de la calculadora:

1. **Variables**: Se obtienen los elementos de la calculadora y el campo de resultado.
2. **Operaciones**: Se guarda un arreglo vacío (`operaciones`) para almacenar los números y operaciones.
3. **Evento principal**: Se escucha el clic en los botones de la calculadora para ejecutar la función `añadirNumeros`.
4. **Función `añadirNumeros`**:
   - Si se hace clic en un número, se agrega al campo de resultado.
   - Si se hace clic en una operación (+, -, *, /), se guarda el número actual en el arreglo de operaciones y se limpia el campo de resultado.
   - Si se hace clic en "igual", se evalúa la operación completa usando `new Function` y muestra el resultado, o "Error" si la operación no es válida.
   - Si se hace clic en "C", se borran los valores actuales y el historial de operaciones.
