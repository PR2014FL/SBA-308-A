import { getCat } from "./api1.mjs";
import { getDog } from "./api2.mjs";
//GIT Repo - https://github.com/PR2014FL/SBA-308-A

getCat();
getDog();
const button = document.querySelector(".pickerBttn");
button.addEventListener("click", randomPicker);

// let randomizer = Math.random();
// console.log(randomizer);

// button.innerHTML = "You're getting a Cat!"
function randomPicker(event) {
  // console.log("hello");
  // button.innerHTML = "You're getting a Cat!";
  let randomizer = Math.random();
  // console.log(randomizer);
  if (randomizer < 0.5) {
    //this will choose the cat picture
    let dogImg = document.querySelector(".imgDog");
    dogImg.setAttribute("style", "display: none"); //clean your hole!
    button.innerHTML = "You're getting a Cat!";
    window.alert("I'm so happy for you!");
    button.setAttribute("class", "clicked");
    getCat();
  } else {
    //this will choose the dog picture
    let catImg = document.querySelector(".imgCat");
    catImg.setAttribute("style", "display: none"); //clean your hole!
    button.innerHTML = "You're getting a Dog!";
    window.alert("My condolences");
    button.setAttribute("class", "clicked");
    getDog();
  }
  event.stopPropagation();
}

//START OVER BUTTON
const resetButton = document.createElement("button");
const bttn2 = document.querySelector(".bttn2");
resetButton.setAttribute("class", "reset");
resetButton.setAttribute("type", "button");
resetButton.innerHTML = "Start Over";
bttn2.appendChild(resetButton);

function reload() {
    window.location.reload();
}
resetButton.addEventListener("click", reload);

