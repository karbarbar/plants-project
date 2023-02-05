let clickButtonsStates = [false, false, false]

function onClickGardenCare() {
  console.log('ssss');

  // document.getElementById('gardenButton').classList.selected = true
  if (clickButtonsStates[0] === false && isLessThenThreeButtonsActive()) {
    document.getElementById('gardenButton').classList.add('selected');
    document.getElementById("garden_1").style.filter = "blur(5px)"
    document.getElementById("garden_2").style.filter = "blur(5px)"
    clickButtonsStates[0] = true
  } else {
    document.getElementById('gardenButton').classList.remove('selected');
    document.getElementById("garden_1").style.filter = ""
    document.getElementById("garden_2").style.filter = ""
    clickButtonsStates[0] = false
  }
  console.log(clickButtonsStates)
}

function onClickLawnCare() {
  if (clickButtonsStates[1] === false && isLessThenThreeButtonsActive()) {
    document.getElementById('lawnButton').classList.add('selected');
    document.getElementById("lawnCare").style.filter = "blur(5px)"
    clickButtonsStates[1] = true
  } else {
    document.getElementById('lawnButton').classList.remove('selected');
    document.getElementById("lawnCare").style.filter = ""
    clickButtonsStates[1] = false
  }
  console.log(clickButtonsStates)
}

function onClickPlanting() {
  if (clickButtonsStates[2] === false && isLessThenThreeButtonsActive()) {
    document.getElementById('plantingButton').classList.add('selected');
    document.getElementById("plantingCare").style.filter = "blur(5px)"
    document.getElementById("plantingCareTwo").style.filter = "blur(5px)"
    document.getElementById("plantingCareThree").style.filter = "blur(5px)"
    clickButtonsStates[2] = true
  } else {
    document.getElementById('plantingButton').classList.remove('selected');
    document.getElementById("plantingCare").style.filter = ""
    document.getElementById("plantingCareTwo").style.filter = ""
    document.getElementById("plantingCareThree").style.filter = ""
    clickButtonsStates[2] = false
  }
  console.log(clickButtonsStates)
}

function isLessThenThreeButtonsActive() {
  return clickButtonsStates.filter(e => e === true).length < 2;

}
