
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


/* const form = document.querySelector('form');
const input = document.querySelector('#text-input');
const result = document.querySelector('#result');

function isPalindrome(text) {
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedText = cleanText.split('').reverse().join('');
  return cleanText === reversedText;
}

function handleClick(event) {
  event.preventDefault();
  const text = input.value;
  const message = isPalindrome(text)
    ? `${text} es un palíndromo.`
    : `${text} no es un palíndromo.`;
  result.textContent = message;
}

form.addEventListener('submit', handleClick);

const checkBtn = document.querySelector('#check-btn');

function handleCheckClick(event) {
  if (input.value === '') {
    alert('Por favor, ingrese un valor');
  }
}

checkBtn.addEventListener('click', handleCheckClick); */

/* const textInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const textResult = document.getElementById('result')


function isPalindrome(string) {
  const cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
}
 */

  /* button.addEventListener('click', (event) => {
    const string = textInput.value
    const reverseString = string.split('').reverse().join('')
    event.preventDefault();

        if(string === reverseString){return console.log("es palindromo")}else{
        return console.log(' no es palindromo')
    }

  });

  function isPalindrome (inputText){
    
  } */