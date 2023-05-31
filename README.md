<!-- hide -->
# The Excuse Generator
<!-- endhide -->

Disneyland for procrastinators and lazy people. 

This project is ideal for avoiding someone annoying, it takes no more than 20 lines of code, and it can save you for the rest of your life!

## The Goal

We wanted a project that uses very little JavaScript but still with a very fun application. The excuse generator takes
20 lines of code, is super simple to understand and is the perfect first project for any beginner developer.

## 📝 Instructions:

Please create a small website that generates an excuse each time a button is pressed, it has to look like this: [Checkout the demo animation](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/preview.gif?raw=true).

## Discuss with your classmates the strategy first

How can we generate an excuse? How are sentences built?

![Excuse generator explanation](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/explanation.gif?raw=true)

The idea is to generate each part of the sentence randomly to come up with great excuses!

## 🌱 How to start this project

Do not clone this repository because we are going to be using a different template.

We recommend opening the `vanillajs-hello` template using a provisioning tool like [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recommended) or [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternatively, you can clone it on your local computer using the `git clone` command.

This is the repository you need to open or clone:

```text
https://github.com/4GeeksAcademy/vanillajs-hello
```

**Please follow these steps on** [how to start a coding project](https://4geeks.com/lesson/how-to-start-a-project).


> 👉 Important: Remember to save and upload your code to GitHub by creating a new repository, updating the remote (`git remote set-url origin <your new url>`), and uploading the code to your new repository using the `add`, `commit` and `push` commands from the git terminal.

## 💡 Hint

1. Update your index.html with one excuse hard-coded, no JS, just one excuse in pure plain HTML.
2. The excuse must be inside an HTML tag that has an id assigned, for example:
```html
  <p id="excuse">My dog ate my homework</p>
```
3. Using JavaScript, create a function that generates and returns a random excuse with the following structure:
```js
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
```
4. To create a consistent excuse, you have to concatenate one item from each array in the proper order.
5. Call the function `onload` and set the excuse into the `innerHTML` of the `#excuse` HTML element.

## Technologies

HTML, CSS3, JavaScript, Webpack.

## Fundamentals

This exercise covers the following fundamentals:

1. Using external Javascript files in your project.
2. How to work with Arrays.
3. Generating random numbers.
4. Concatenating strings.
5. Using functions (at least a bit).
6. Working with events (at least a bit).

This and many other projects are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
