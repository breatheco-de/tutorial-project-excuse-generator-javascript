<!-- hide -->
# El Generador de Excusas
<!-- endhide -->

Disneylandia para procrastinadores y perezosos.

Este proyecto es ideal para evitar alguien molestoso. No toma más de 20 líneas de código y puede salvarte por el resto de tu vida.

## Objetivo

Queríamos un proyecto que usara muy poco JavaScript, pero que tuviese una aplicación muy divertida, el generador de excusas toma 20 líneas de código, es super simple de entender y es el primer proyecto perfecto para cualquier desarrollador principiante.

## 📝 Instrucciones:

1. Por favor, crea un pequeño sitio web que genere una excusa cada vez que se refresca la página, debe verse así: [Vea la animación de demostración](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/preview.gif?raw=true).

## Discute con tus compañeros de clase la estrategia primero

¿Cómo podemos generar una excusa? ¿Cómo se construyen las oraciones?

![explicación del generador de excusas](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/explanation.gif?raw=true)

¡La idea es generar cada parte de la oración al azar para encontrar grandes excusas!

<onlyfor saas="false" withBanner="false">
  
## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el repositorio `vanillajs-hello` utilizando un entorno de desarrollo como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```text
https://github.com/4GeeksAcademy/vanillajs-hello
```

**👉 Por favor sigue estos pasos sobre** [cómo comenzar un proyecto de programación.](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

</onlyfor>

## 💡 Pistas:

+ En el archivo `index.html` inventa una excusa nueva, sin JS, solo una excusa en HTML puro y simple.
+ La excusa debe estar dentro de una etiqueta HTML que tenga un `id` asignado, por ejemplo:
```html
  <p id="excuse">My dog ate my homework</p>
```
+ Usando JavaScript, crea una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
```js
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
```
+ Para crear una excusa consistente, tienes que concatenar un elemento de cada array o arreglo en el orden correcto.
+ Usa la función `onload` y establece la excusa en el `innerHTML` del elemento HTML `#excuse`.

## Tecnologías

HTML, CSS3, JavaScript, Vite.

## Fundamentos

Este ejercicio cubre los siguientes fundamentos:

1. Utilizar archivos JavaScript externos en tu proyecto.
2. Como trabajar con arreglos/listas (arrays).
3. Generar números al azar.
4. Concatenar strings (cadenas).
5. Utilizar funciones (al menos un poco).
6. Trabajar con eventos (al menos un poco).

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).
