const activeCell = document.getElementById("active-cell");
const fontSIze=document.getElementById("text-size");
const fontfamily=document.getElementById("family");
const fcolor=document.getElementById("format-color");
const align=document.getElementById("left-align");
const bg=document.getElementById("background-color");
const bold=document.getElementById("bold");
const italic=document.getElementById("italic");
const underline=document.getElementById("underline");

const form=document.getElementById("form");
let active = null;

const state = {};
const deafultProperty = {
  family: "sans",
  fontsize: 16,
  color: "#000",
  textAlign: "left",
  backgroundColor: "#fff",
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
  //this function verifies if the cell is alredy selected or not by looking in state object
  //update ui as per options
  form.fontFamily.value=optionState.family;
  form.fontsize.value=optionState.fontsize;
  form.alignment.value=optionState.textAlign;
  form.bold.checked=optionState.isBold;
  form.italic.checked=optionState.isItalic;
  form.underline.checked=optionState.isUnderLined;
  form.color.value=optionState.color;
  form.bgcolor.value=optionState.backgroundColor;
}




function onChangeFontSIze(){

}

function onFormChange(){
    if(!active){
        alert("please select a cell to make changes");
        form.reset();
        return;
    }
let currentState={

}
}