const characters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]



const txtInput1 = document.getElementById('input')
const txtInput2 = document.getElementById('inputs')
const checkBox = document.getElementById('number')
const checkLetters = document.getElementById('letters')
const checkSymbols = document.getElementById('symbols')
const checkChars = document.getElementById('chars')
const range = document.getElementById('ranges')



document.getElementById('btn').addEventListener('click', generateRandomPassBtn)
 range.addEventListener('change',generateMaxLength)

function generateRandomPassBtn(){
   checkAllChars()
}
  
function generateMaxLength(e) {
  const length = document.getElementById("length");
  length.textContent = `Password length: `;
  length.textContent += e.target.value;

   txtInput1.value = ``;
   txtInput2.value = ``;
}

function checkAllChars(){
  if(checkChars.checked){
    document.querySelector('.chars').value = setAllRandomCharacters()
  }

  else if(checkBox.checked){
    document.querySelector('.number').value = setRandomNumber()
  }

  else if(checkLetters.checked){
    document.querySelector('.letters').value = setRandomLetters()
  }
   
  else if(checkSymbols.checked){
    document.querySelector('.symbols').value = setRandomSymbols()
  }

  else{
    txtInput1.value = '';
    txtInput2.value = '';
  }
}

function setAllRandomCharacters(){
    for(let n = 0; n < range.value; n++){
      txtInput1.value += randomNumberGenerator(characters)
      txtInput2.value += randomNumberGenerator(characters)
     }
  
}

function setRandomNumber(){
    for(let n = 0; n < range.value; n++){
    txtInput1.value += randomNumberGenerator(numbers)
    txtInput2.value += randomNumberGenerator(numbers)
   }
    
}

const setRandomLetters = () => {
     for(let n = 0; n < range.value; n++){
    txtInput1.value += randomNumberGenerator(letters)
    txtInput2.value += randomNumberGenerator(letters)
   }
}

const setRandomSymbols = () => {
     for(let n = 0; n < range.value; n++){
    txtInput1.value += randomNumberGenerator(symbols)
    txtInput2.value += randomNumberGenerator(symbols)
   }
}




function randomNumberGenerator(number){
 const randomNum1 = Math.floor(Math.random()* number.length)
  const randomNum2 =  Math.floor(Math.random()* number.length)
  return number[randomNum1] && number[randomNum2]
}