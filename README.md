<!-- hide -->
# The Excuse Generator
<!-- endhide -->

Disneyland for procrastinators and lazy people. 

This project is ideal for avoiding someone annoying, it takes no more than 20 lines of code and it can save you for the rest of your life!

## The Goal

We wanted a project that uses very little Javascript but still with a very fun application. The excuse generator takes
20 lines of code, is super simple to understand and is the perfect first project for any beginner developer.

## Instructions

Please create a small website that generates an excuse each time a button is pressed, it has to look like this: [Checkout the demo animation](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/preview.gif?raw=true).

## Discuss with your classmates the strategy first

How can we generate an excuse? How are sentences build?

![Excuse generator explanation](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/explanation.gif?raw=true)

The idea is to generate each part of the sentence randomly to come up with great excuses!

## 🌱  How to start this project

Do not clone this repository.

The first step to start coding is cloning the [vanillajs boilerplate](https://github.com/4GeeksAcademy/vanillajs-hello) on your local computer or gitpod.

a) If using Gitpod (recommended) you can clone the boilerplate by [clicking here](https://github.com/4GeeksAcademy/vanillajs-hello).  
b) If working locally type the following command from your command line: `git clone https://github.com/4GeeksAcademy/vanillajs-hello`.  

💡 Important: Remember to create a new repository, update the remote (`git remote set-url origin <your new url>`), and upload the code to your new repository using `add`, `commit` and `push`.

## Hint

1. Update your index.html with one excuse hard-coded, no js, just one excuse in pure plain HTML.
2. The excuse must be inside an HTML tag that has an id assigned, for example:
```html
  <p id="excuse">My dog ate my homework</p>
```
3. Using javascript, create a function that generates and returns a random excuse with the following structure:
```js
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
```
4. To create a consistent excuse you have to concatenate one item from each array in the proper order.
5. Call that function onLoad and set the excuse into the innerHTML of the #excuse HTML element.


## Technologies

HTML, CSS3, Javascript, Webpack.

## Fundamentals

This exercise covers the following fundamentals:

1. Using external Javascript files in your project.
2. How to work with Arrays.
3. Generating random numbers.
4. Concatenating strings.
5. Using functions (at least a bit).
6. Working with events (at least a bit).
