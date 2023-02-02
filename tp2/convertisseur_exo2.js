function calculerEnF() {
    var celsius = document.body.children[1].value;

    var result = (9 / 5) * celsius + 32;
    document.body.children[4].value = result;
}

function calculerEnC() {
    var fahrenheit = document.body.children[4].value;

    var result = (5 / 9) * (fahrenheit - 32);
    document.body.children[1].value = result;
}