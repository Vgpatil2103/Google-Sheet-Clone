
const activeCell=document.getElementById("active-cell");


function onCellFocus(event){
    
activeCell.innerText=event.target.id;
}