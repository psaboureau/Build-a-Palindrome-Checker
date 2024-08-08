const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

const checkPalindrome = (input) => {
  if (!input) {
    alert("Please input a value");
    return;
  }
  
  const cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const isPalindrome = cleanInput === cleanInput.split('').reverse().join('');
  resultElement.innerText = `${input} is ${isPalindrome ? '' : 'not '}a palindrome`;
}

checkButton.addEventListener("click", () => checkPalindrome(textInput.value));
