const containerEl = document.querySelector(".container");

const careers = ["Student", "Web Devoloper", "Freelancer"]

let careersIndex = 0;
let charentorIndex = 0;

updateText();

function updateText(){
    charentorIndex++;
    containerEl.innerHTML = `
    <h1>I am a ${careers[careersIndex].slice(0,charentorIndex)}</h1>
    `;
    if(charentorIndex === careers[careersIndex].length){
        careersIndex++;
        charentorIndex = 0;
    }
    if(careersIndex === careers.length){
        careersIndex = 0;
    }
    setTimeout(updateText, 400)
}