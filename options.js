const activeCell = document.getElementById("active-cell");

const form=document.getElementById("form");
let active = null;

const state = {};
const deafultProperty = {
  family: "sans",
  fontsize: 16,
  color: "#0000000",
  textAlign: "left",
  backgroundColor: "#ffffff",
  isBold: false,
  isItalic: false,
  isUnderLined: false,
};

function onCellFocus(event) {
  const elementId = event.target.id;
  activeCell.innerText = elementId;
  active = event.target;

  if (state[elementId]) {
    //alredy seklected cell
    resetOptions(state[elementId]);
  } else {
    //selected for the first time
    //fill the options with defult state
    resetOptions(deafultProperty);
  }

  
}

function resetOptions(optionState) {
  
  form.fontFamily.value = optionState.family;
  form.fontsize.value = optionState.fontsize;
  form.alignment.value = optionState.textAlign;
  form.bold.checked = optionState.isBold;
  form.italic.checked = optionState.isItalic;
  form.underline.checked = optionState.isUnderLined;
  form.tcolor.value = optionState.color; 
form.bgcolor.value = optionState.backgroundColor;

}




function onChangeFontSIze(){

}
function onFormChange() {
  if (!active) {
      alert("please select a cell to make changes");
      form.reset();
      return;
  }
  let currentState = {
      family: form.fontFamily.value,
      fontsize: form.fontsize.value,
      color: form.tcolor.value,
      textAlign: form.alignment.value,
      backgroundColor: form.bgcolor.value,
      isBold: form.bold.checked,
      isItalic: form.italic.checked,
      isUnderLined: form.underline.checked,
  }
  //apply all style to active cell
  applyStyles(currentState);
   //need to update the state

 state[active.id]=currentState;
}

//aplly styles on selected cell
function applyStyles(styleObject) {
  active.style.fontSize = styleObject.fontsize + "px";
  active.style.fontFamily = styleObject.family;
  active.style.color = styleObject.color; 
  active.style.textAlign = styleObject.textAlign;
  active.style.backgroundColor = styleObject.backgroundColor;
  active.style.fontWeight = styleObject.isBold ? "bold" : "normal";
  active.style.fontStyle = styleObject.isItalic ? "italic" : "normal";
  active.style.textDecoration = styleObject.isUnderLined ? "underline" : "none";
}
