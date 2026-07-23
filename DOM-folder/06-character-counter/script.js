const textInput = document.querySelector("#text-input");
const deleteBtn = document.querySelector('#delete-btn')

function charCount(char) {
  const charCount = document.querySelector('#char-count');

  if(char.value.length >= 50){
      textInput.value = textInput.value.slice(0, 50);
  }
  const charLen = char.value.length;

  if(charLen >= 50){
     charCount.style.color = '#FF0000';
  }else{
    charCount.style.color = '#0d0b0bff';
  }
  
  charCount.textContent = `Character Count: ${charLen}/50`
}



textInput.addEventListener('input', () => charCount(textInput));
deleteBtn.addEventListener('click', () => {
    textInput.value = '';
    charCount(textInput);          
})