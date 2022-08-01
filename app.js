const textInput=document.querySelector("#txt-input");
const btnTranslate=document.querySelector("#btn-translate")
const outputDiv=document.querySelector("#output");



btnTranslate.addEventListener("click",()=>{
  outputDiv.innerText=textInput.value;
})