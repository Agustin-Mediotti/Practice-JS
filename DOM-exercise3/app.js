/*
Write a JavaScript function to get the value of the href, hreflang, rel, target,
and type attributes of the specified link.
*/

let link = document.getElementById('w3r');

function getAttributes(e) {
    document.write(link.getAttribute('type'), '</br>')
    document.write(link.getAttribute('href'), '</br>')
    document.write(link.getAttribute('hreflang'), '</br>')
    document.write(link.getAttribute('rel'), '</br>')
    document.write(link.getAttribute('target'))
}