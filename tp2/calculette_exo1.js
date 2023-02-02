function calculer() {
    var input1 = document.getElementById("firstvalue").value;
    var input2 = document.getElementById("secondvalue").value;

    var typeofcalcul = document.getElementById("calculoptionselecter").value;

    switch(typeofcalcul) {
        case "-":
            var result = input1 - input2;
            document.getElementById("answer").innerText = result;
            break;
        
        case "+":
            var result = parseInt(input1) + parseInt(input2);
            document.getElementById("answer").innerText = result;
            break;

        case "x":
            var result = input1 * input2;
            document.getElementById("answer").innerText = result;
            break;

        case "/":
            var result = input1 / input2;
            document.getElementById("answer").innerText = result;
            break;
    }
}