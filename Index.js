window.onload= ()=> {

document.querySelector("btn").addEventListner("click", () =>{
 document.querySelector('#excuse').innerHTML = geenerateExcuese();
});
 
console.log("Any String");
};

let generateExcuse = () => {
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let possetion = ['homework', 'the car', 'a shoe', 'food']
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


let whoIndex = Math.floor(Math.random()*who.length);
let whatIndex = Math.floor(Math.random()* what.length);
let possetionIndex = Math.floor(Math.random()*possetion.length);
let whenIndex = Math.floor(Math.random()* when.length);

    return who[whoIndex] +' '+what[whatIndex]+' '+ possetion[possetionIndex] +' '+when[whenIndex];
};
