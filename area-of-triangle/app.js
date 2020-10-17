// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// primero sacar el semiperimetro del triangulo multiplicando la suma de sus lados por 1/2.
let a = 5;
let b = 6;
let c = 7;

let semiperimetro = (a+b+c) / 2;
let area = 0;

// formula de Herón: a = raiz[semiperimetro * ((semi - a) * (semi - b) * (semi - c))]

area = Math.sqrt((semiperimetro*(semiperimetro - a)*(semiperimetro - b)*(semiperimetro - c)));

document.write('The area of the triangle is: ' + area);