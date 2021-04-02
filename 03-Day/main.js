//  Exercises - level 1
let firstName ='Elias', 
    lastName ='Franco', 
    country ='Bolivia',
    city ='Yacuiba',
    age =22,
    isMarried = false;

    console.log(typeof firstName);
    console.log(typeof lastName);
    console.log(typeof country);
    console.log(typeof city);
    console.log(typeof age);
    console.log(typeof isMarried);
    
    console.log( typeof '10' == typeof 10);
    console.log(parseInt('9.8') ==  10);


    //  Valores true
    let number1 = 1, colegio = 'Club de Leones', estudiante = true;
    //      Valores false
    let cero = 0, isImpaciente = '', tecnico = false;

    console.log('Valores verdaderos', number1, colegio, estudiante);
    console.log('Valores falsos', cero, isImpaciente, tecnico);
    console.log( isImpaciente? 'verdadero': 'falso' );



    /*
    4 > 3
    4 >= 3
    4 < 3
    4 <= 3
    4 == 4
    4 === 4
    4 != 4
    4 !== 4
    4 != '4'
    4 == '4'
    4 === '4'
    Find the length of python and jargon and make a falsy comparison statement.

*/

console.log( 4 > 3 );

console.log('  4 > 3  ',  4 > 3, 'ver');
console.log('  4 >= 3  ', 4 >= 3, 'ver');
console.log('  4 < 3  ',  4 < 3, 'fal');
console.log('  4 <= 3  ',  4 <= 3, 'fal');
console.log('  4 == 4  ',  4 == 4, 'ver');
console.log('  4 === 4  ',  4 === 4, 'ver');
console.log('  4 != 4  ',   4 != 4, 'fal');
console.log('  4 !== 4  ',  4 !== 4, 'fal');
console.log('  4 != "4"  ', 4 != '4', 'fal');
console.log('  4 == "4"  ', 4 == '4', 'ver');
console.log('  4 === "4"  ', 4 === '4', 'fal');

console.log( 'python'.length != 'jargon'.length);

console.log('----- parte 2  -------');

console.log('4 > 3 && 10 < 12', 4 > 3 && 10 < 12, 'true');
console.log('4 > 3 && 10 > 12', 4 > 3 && 10 > 12, 'false');
console.log('4 > 3 || 10 < 12', 4 > 3 || 10 < 12, 'true');
console.log('4 > 3 || 10 > 12', 4 > 3 || 10 > 12, 'true');
console.log('!(4 > 3)', !(4 > 3), 'false');
console.log('!(4 < 3)', !(4 < 3), 'true');
console.log('!(false)', !(false), 'true');
console.log('!(4 > 3 && 10 < 12)', !(4 > 3 && 10 < 12), 'false' );
console.log('!(4 > 3 && 10 > 12)', !(4 > 3 && 10 > 12), 'true');
console.log('!(4 === "4")', !(4 === '4'), 'true');

console.log( !('python'.search('on'), 'jargon'.search('on')));


let now = new Date();
console.log( now.getFullYear());
console.log( now.getMonth()+1);
console.log( now.getDate(), 'date');
console.log( now.getDay(), 'day');
console.log( now.getHours(), 'hours');
console.log( now.getMinutes(), 'minutes');

console.log(now.getTime());


//      Exercises: Level 2
 
//      Area de un triangulo
// let base = Number(prompt('Introduccir la base'));
// let altura = Number(prompt('Introduccir la altura'));
// console.log( `El area es ${0.5 * base * altura }` );


//      Perimetro de un triangulo
// let a = Number(prompt('Introduccir el primer lado'));
// let b = Number(prompt('Introduccir el segundo lado'));
// let c = Number(prompt('Introduccir el tercer lado'));
// console.log(`El perimetro del triangulo es: ${a+b+c}`);

// let nombre = prompt('Introducir su nombre');
// console.log(nombre.length > 7? 'su nombre es largo': 'su nombre es corto');

// Conducir
let nacimiento = Number(prompt('Introducir su el año en el q nacio'));
let now1 = new Date();
let calEdad = now1.getFullYear() - nacimiento;
console.log(calEdad >= 18? `Tienes ${calEdad}. Puedes manejar un vehiculo`: `Tienes ${calEdad} no puedes conducir un vehiculo`);


let anio = now.getFullYear();
let mes = now.getMonth()+1;
let dia = now.getDate();
let hora = now.getHours();
let minutos = now.getMinutes();

console.log(`${anio}-${mes}-${dia} ${hora}:${minutos}`);
console.log(`${dia}-${mes}-${anio} ${hora}:${minutos}`);
console.log(`${dia}/${mes}/${anio} ${hora}:${minutos}`);


