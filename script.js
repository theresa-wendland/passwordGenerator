const characterAmonuntRange = document.getElementById('charRange');
const characterAmonuntNumber = document.getElementById('charNumber');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const from = document.getElementById('passwordGenerator');
const passwordDisplay = document.getElementById('passwordDisplay');
const charCodesUppercase = generatePasswordCodes(65, 90);
const charCodesLoswercase= generatePasswordCodes(97, 122 );
const charCodesNumbers= generatePasswordCodes(48, 57);
const charCodesSymbols= generatePasswordCodes(33, 47).concat(generatePasswordCodes(58, 64)).concat(generatePasswordCodes(91, 96));




characterAmonuntNumber.addEventListener('input', syncCharacterAmount);
characterAmonuntRange.addEventListener('input', syncCharacterAmount);


function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmonuntNumber.value = value;
  characterAmonuntRange.value = value;
}

from.addEventListener('submit', e => {
  e.preventDefault();
  const password = generatePassword(characterAmonuntNumber.value, includeUppercase.checked, includeNumbers.checked, includeSymbols.checked);
  passwordDisplay.innerText = password;
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
console.log(charCodesUppercase)

let charCodes = charCodesLoswercase;

if(includeUppercase) charCodes = charCodes.concat(charCodesUppercase);
if(includeNumbers) charCodes = charCodes.concat(charCodesNumbers);
if(includeSymbols) charCodes = charCodes.concat(charCodesSymbols);

const passwordCharacters = [];

for(let i = 0; i < characterAmount; i++) { 
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode))

}
return passwordCharacters.join('')
}

function generatePasswordCodes(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}