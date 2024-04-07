import {getCat} from "./api1.mjs"
import {getDog} from "./api2.mjs"


getCat();
getDog();
let pickerBttn = document.getElementsByClassName("pickerBttn");
pickerBttn.setInnerHTML = "You're getting a Cat!"
function randomPicker() {
    console.log("hello");

// let randomizer = Math.random();
// if (randomizer < .5) {//this will choose the cat picture
//     pickerBttn.setInnerHTML = "You're getting a Cat!"
//     getCat();
// } else if (randomizer >= .5) {//this will choose the dog picture
//     getDog();
//     pickerBttn.setInnerHTML = "You're getting a Dog!"

// };
}
