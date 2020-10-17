/*
Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically 
removing one letter from the end of the string and attaching it to the front.
*/

let str = 'w3resource';
let array = str.split('');

document.write(array, '</br>');
function rotate(arr) {
    for (i = 0; i < arr.length; i++) {
        var elem = arr.pop();
        arr.unshift(elem);
        document.write(arr, '</br>');
    }
    return arr;
}
rotate(array);
