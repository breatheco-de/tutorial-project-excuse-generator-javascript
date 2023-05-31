<!-- hide -->
# El Generador de Excusas
<!-- endhide -->

Disneylandia para procrastinadores y perezosos.

Este proyecto es ideal para evitar alguien molestoso. No toma más de 20 líneas de código y puede salvarte por el resto de tu vida.

## Objetivo

Queríamos un proyecto que usara muy poco JavaScript, pero que tuviese una aplicación muy divertida, el generador de excusas toma 20 líneas de código, es super simple de entender y es el primer proyecto perfecto para cualquier desarrollador principiante.

## 📝 Instrucciones:

Por favor, crea un pequeño sitio web que genere una excusa cada vez que se presione un botón, debe verse así: [Vea la animación de demostración](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/preview.gif?raw=true).

## Discute con tus compañeros de clase la estrategia primero

¿Cómo podemos generar una excusa? ¿Cómo se construyen las oraciones?

![explicación del generador de excusas](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/explanation.gif?raw=true)

¡La idea es generar cada parte de la oración al azar para encontrar grandes excusas!

## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el repositorio `vanillajs-hello` utilizando un entorno de desarrollo como [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```
https://github.com/4GeeksAcademy/vanillajs-hello
```

**👉 Por favor sigue estos pasos** [cómo comenzar un proyecto de codificación](https://4geeks.com/lesson/how-to-start-a-project).


> Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

## 💡 Pista

1. En el archivo index.html inventa una excusa nueva, sin JS, solo una excusa en HTML puro y simple.
2. La excusa debe estar dentro de una etiqueta HTML que tenga un ID asignado, por ejemplo:
```html
  <p id="excuse">My dog eat my homework</p>
```
3. Usando JavaScript, crea una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
```js
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
```
4. Para crear una excusa consistente, tienes que concatenar un elemento de cada array o arreglo en el orden correcto.
5. Usa la función `onload` y establece la excusa en el `innerHTML` del elemento HTML `#excuse`.

## Tecnologías

HTML, CSS3, JavaScript, Webpack.

## Fundamentos

Este ejercicio cubre los siguientes fundamentos:

1. Utilizar archivos JavaScript externos en tu proyecto.
2. Cómo trabajar con arreglos/listas (Arrays).
3. Generar números al azar.
4. Concatenar strings (cadenas).
5. Utilizar funciones (al menos un poco).
6. Trabajar con eventos (al menos un poco).

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).
