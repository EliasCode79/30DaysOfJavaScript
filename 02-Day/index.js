let challenge = '30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

let cut = challenge.substr(7,challenge.length-1);
console.log(cut);

let separado = challenge.slice(5,15);
console.log(separado);

let incluido = challenge.includes('Script')
console.log(incluido);

let div1 = challenge.split("");
console.log(div1);

let div = challenge.split(" ");
console.log(div);

let bigtech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(bigtech.split(','));

console.log(challenge.replace('JavaScript','Python'));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(challenge.charAt(15)));

let word ='You cannot end a sentence with because because because is a conjunction';
console.log(word.search('because'));

let days = ' 30 days of javascript';
console.log(days.trim());

let inicio = '30 Days of';
console.log(inicio.concat(' ', 'JavaScript'));

console.log(inicio.repeat(2));

let frase = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\ by John Holmes teaches us to help one another.'
console.log(frase);


let frase2 = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."';
console.log(frase2);


let number = 10;
let string = '10';
console.log(typeof(number) == string);
// string = +string;
console.log(typeof(number) == typeof(+string));

console.log(Math.ceil(parseFloat('9.8')) == 10);

let py = 'python', ls = 'jargon';

console.log(py.includes('on'));
console.log(ls.includes('on'));

let jerga = 'I hope this course is not full of jargon';
console.log(jerga.includes('jargon'));

let random = Math.round(Math.random()*100);
console.log(random);


let random2 = Math.round(Math.random()*50) && Math.round(Math.random()*100);
console.log(random2);

let js = 'Javascript';
// console.log(js.indexOf(Math.round(Math.random()*js.length-1)));
console.log(js[Math.round(Math.random()*js.length-1)]);

string = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(string.match('love'));

let pattern = /love/;
console.log(string.match(pattern));


let palabra = 'You cannot end a sentence with because because because is a conjunction';
console.log(palabra.substr(0, palabra.search('because')) + palabra.substr(palabra.search('is')));

// Ejercicios - Level 3

let words = 'Love is the best thing in this world. Some found their love and some are still looking for their love';
let patron = '/love/g';
console.log(words.match(patron));






