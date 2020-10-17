// declrarar variables de fecha.

let myDate = new Date();
let myDay = myDate.getDate();
let myMonth = myDate.getMonth();
let myYear = myDate.getFullYear();

// arrays de meses.
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// imprimir en pantalla los resultados.
document.write(myDay + '/' + months[myMonth] + '/' + myYear + "</br>" + (myMonth + 1) + '/' + myDay + '/' + myYear);