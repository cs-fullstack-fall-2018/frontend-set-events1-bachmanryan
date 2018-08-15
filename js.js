var theButton = document.getElementById("button1");
var total = document.getElementById("theTotal");

theButton.addEventListener("click", sumPress);
var sum = 0;

function sumPress() {
    total.innerHTML += 1;
    sum += 1;
    total.innerHTML = sum;
    total.innerText = parseInt(total.innerText) + 1;
}


/*

Step 1:
Complete

Step 2:
Incomplete. Not started.

From Kenn
*/