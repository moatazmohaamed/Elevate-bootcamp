const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const submitBtn = document.getElementById("submitBtn");
const primNumberResult = document.getElementById("primNumberResult");

function getAllPrimeNumbers(n, m) {
    if (n < 2) {
        n = 2;
    }

    if (n <= m && n > 0 && m > 0) {
        let result = [];
        for (let i = n + 1; i <= m; i++) {
            let primeNumber = true;
            for (let number = 2; number <= Math.sqrt(i); number++) { // law i = 25 ... range => 2 - 5
                if (i % number === 0) { // law 25 divisible b ay rkm mn 2 - 5 yb2a mesh prime 
                    primeNumber = false; // whtt7wl false wel loop hatbreak
                    break;
                }
            }
            if (primeNumber) {
                result.push(i);
            }
            primNumberResult.innerHTML = `<div class="text-white d-flex overflow-x-scroll">${result}</div>`;
        }
    } else {
        alert(`Folow the rules:
    1- Enter A postive number
    2- Make Sure Number One is smaller than Number Two
            `);
    }
}

submitBtn.addEventListener("click", function () {
    getAllPrimeNumbers(+inputOne.value, +inputTwo.value);
})