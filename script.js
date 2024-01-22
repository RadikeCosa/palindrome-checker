
function checkPalindrome() {
  const input = document.getElementById("text-input").value;
  if (input === "") {
    alert("Por favor ingrese un valor");
    return;
  }
  const strippedInput = input.replace(/[^0-9a-z]/gi, "").toLowerCase();
  const reversedInput = strippedInput.split("").reverse().join("");
  if (strippedInput === reversedInput) {
    document.getElementById("result").innerHTML = `${input} es un palíndromo`;
  } else {
    document.getElementById("result").innerHTML = `${input} no es un palíndromo`;
  }
}

document.getElementById("check-btn").addEventListener("click", checkPalindrome);

