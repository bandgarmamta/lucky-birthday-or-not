const dateOfBirth = document.querySelector('#bday-input');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumberButton = document.querySelector('#show-btn');
const outputBox = document.querySelector('#output');

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {

    outputBox.textContent = "Your birthday is lucky 😍";
  }
  else {
    outputBox.textContent = "Your birthday is not lucky 😭";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (dob && sum) {

    compareValues(sum, luckyNumber.value);
  }
  else {
    outputBox.style.color = "red";
    outputBox.textContent = "Both the fields are mandatory 😠";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i = i + 1) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky)