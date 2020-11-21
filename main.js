let who = ['The dog','My granma','His turtle','My bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let excuse = `${who[Math.floor(Math.random() * 4)]} ${what[Math.floor(Math.random() * 4)]} ${when[Math.floor(Math.random() * 5)]}`;

document.querySelector("#excuse").innerHTML = excuse;