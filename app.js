const textInput=document.querySelector("#txt-input");
const btnTranslate=document.querySelector("#btn-translate")
const outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server !! try again after some time")
}


btnTranslate.addEventListener("click",()=>{
    var inputText=textInput.value; //taking the input

    //calling server for processing

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=> {
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;  //output
        })
    .catch(errorHandler)

})