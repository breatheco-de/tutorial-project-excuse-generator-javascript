# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  The Excuse Generator

Disneyland para procrastinadores y perezosos.

Este proyecto es ideal para evitar alguien molestoso. No toma más de 20 líneas de código y puede salvarte por el resto de tu vida.

## La Meta

Queríamos un proyecto que usara muy poco Javascript pero que tuviese una aplicación muy divertida, el generador de excusas toma
20 líneas de código, es super simple de entender y es el primer proyecto perfecto para cualquier desarrollador principiante.

## 🌱  Cómo iniciar este proyecto

No clones este repositorio. El primer paso para comenzar a codificar es clonar el [vanillajs boilerplate](https://github.com/4GeeksAcademy/vanillajs-hello) y tienes dos opciones: 

a) Si usas Gitpod (recomendada) puedes clonar el boilerplate [clic aquí](hhttps://github.com/4GeeksAcademy/vanillajs-hello).

b) Si trabajas localmente, escribe el siguiente comando en tu terminal: `git clone https://github.com/4GeeksAcademy/vanillajs-hello`.

💡 Importante: Recuerda actualizar el `remote` del proyecto con el de tu repositorio usando `git remote set-url origin <your new url>`, y luego guardar tu código en tu nuevo repositorio usando `add`, `commit` y `push`.

## Instrucciones

Crea un sitio web pequeño que genere una excusa cada vez que se presione un botón (vea la demostración de su mentor acerca de los detalles)

Tiene que verse así: [Echa un vistazo a la animación de demostración.](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/preview.gif?raw=true).

## Pista

1. Crea un index.html con una excusa codificada, no js, solo una excusa en HTML puro y simple.
2. La excusa debe estar dentro de una etiqueta HTML que tenga un ID asignado, por ejemplo:
```html
  <p id="excuse">My dog eat my homework</p>
```
3. Usando javascript, crea una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
```js
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
```
4. Para crear una excusa consistente, tiene que concatenar un elemento de cada array o arreglo en el orden correcto.
5. Llame a esa función onLoad y establezca la excusa en el innerHTML del elemento HTML #excuse.


## Tecnologías

HTML, CSS3, Sass, Javascript, Webpack.

## Fundamentos
Este ejercicio cubre los siguientes fundamentos:
1. Utilizar archivos Javascript externos en tu proyecto.
2. Cómo trabajar con arreglos.
3. Generar números al azar.
4. Concatenar strings (cadenas).
5. Utilizar funciones (al menos un poco).
6. Trabajar con eventos (al menos un poco).
