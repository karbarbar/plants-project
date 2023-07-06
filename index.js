console.log('1111')

let acc = document.getElementsByClassName("accordion");
let i;

console.log(acc)
console.log(acc.length)

for(i = 0; i < acc.length; i++) {
      console.log('333')

  acc[i].addEventListener("click", function() {
          console.log('4444')

    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let clickButtonsStates = [false, false, false]

function onClickGardenCare() {
  if (clickButtonsStates[0] === false && isLessThenThreeButtonsActive()) {
    document.getElementById("gardenButton").classList.add("selected");
    document.getElementById("garden_1").style.filter = "blur(5px)"
    document.getElementById("garden_2").style.filter = "blur(5px)"
    clickButtonsStates[0] = true
  } else {
    document.getElementById("gardenButton").classList.remove("selected");
    document.getElementById("garden_1").style.filter = ""
    document.getElementById("garden_2").style.filter = ""
    clickButtonsStates[0] = false
  }
}

function onClickLawnCare() {
  if (clickButtonsStates[1] === false && isLessThenThreeButtonsActive()) {
    document.getElementById("lawnButton").classList.add("selected");
    document.getElementById("lawnCare").style.filter = "blur(5px)"
    clickButtonsStates[1] = true
  } else {
    document.getElementById("lawnButton").classList.remove("selected");
    document.getElementById("lawnCare").style.filter = ""
    clickButtonsStates[1] = false
  }
}

function onClickPlanting() {
  if (clickButtonsStates[2] === false && isLessThenThreeButtonsActive()) {
    document.getElementById("plantingButton").classList.add("selected");
    document.getElementById("plantingCare").style.filter = "blur(5px)"
    document.getElementById("plantingCareTwo").style.filter = "blur(5px)"
    document.getElementById("plantingCareThree").style.filter = "blur(5px)"
    clickButtonsStates[2] = true
  } else {
    document.getElementById("plantingButton").classList.remove("selected");
    document.getElementById("plantingCare").style.filter = ""
    document.getElementById("plantingCareTwo").style.filter = ""
    document.getElementById("plantingCareThree").style.filter = ""
    clickButtonsStates[2] = false
  }
}

function isLessThenThreeButtonsActive() {
  return clickButtonsStates.filter(e => e === true).length < 2;
}

function expandAccordion() {
}



