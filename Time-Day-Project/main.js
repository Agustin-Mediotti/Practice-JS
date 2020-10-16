/* 1. Write a JavaScript program to display the current day and 
time in the following format.

Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/


let myDate = new Date(); // creamos variable de fecha y hora.
let myDay = myDate.getDay(); // usamos la función .getDay() para obtener el integer que representa el dia.


// creamos un array para asignar el integer de fecha y obtener el día.
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let myHour = myDate.getHours(); // creamos varable de hora y usamos la función .getHours(), esta nos devuelve integer.
let myMinute = myDate.getMinutes(); // creamos variable para minutos usando la función .getMinutes().
let myMilli = myDate.getMilliseconds(); // creamos variable para milisegundos usando la función .getMilliseconds().


// creamos una función que compare si son menores a 12 y en ese caso imprima "AM" o "PM".
function timeSet(i) {
    if (i < 12) {
        document.write('Today is: ' + week[myDay] + "<br/>" + ' Current time is: ' + myHour + ' : ' + myMinute + ' : ' + myMilli + ' AM')
    } else {
        document.write('Today is: ' + week[myDay] + "<br/>" + ' Current time is: ' + myHour + ' : ' + myMinute + ' : '  + myMilli + ' PM')
    }
}

// iniciamos la funcion
timeSet(myHour);

