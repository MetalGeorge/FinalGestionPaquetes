# FinalGestionPaquetes
Final Gestion Paquetes - Componente Web Botón

Este botón implementa un mensaje de confirmación automático antes de ejecutar la función establecida.

Se tienen dos atributos para que funcione:
textoConfirmacion => es el texto que se colocará en el dialogo de confirmación
funcion => es el código (o nombre de función que se desea ejecutar al presionar el botón)

## Instalacion

npm install finalgestionpaquetes

## Uso

Incluir las referencias al js y al css

```html
<link rel="stylesheet" type="text/css" href="node_modules/finalgestionpaquetes/lib/index.css">

<script type="text/javascript" src="node_modules/finalgestionpaquetes/lib/index.js"></script>

<mi-boton textoConfirmacion="Acepta?" funcion="alert('Ejecutado')" > Boton con confirmacion</mi-boton>

```