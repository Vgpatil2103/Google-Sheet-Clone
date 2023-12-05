let coulmns=26;
const rows=100;
const headerContainer=document.querySelector(".header");
const mainContainer=document.querySelector(".main");
const serialNumberContainer=document.querySelector(".sno");
//loop to create heading A to Z
function createHeaderCells(){
 for (let i=0;i<=coulmns;i++){
    const headerCell=document.createElement("div");
    headerCell.className="header-cell";
    if(i!==0){
        headerCell.innerText= String.fromCharCode(64+i);
    }
    headerContainer.appendChild(headerCell);
 }
}

//1 to 100
function createSerialNumberCells(){
for(let i=1;i<=rows;i++){
    const snocell=document.createElement("div");
    snocell.innerText=i;
    snocell.className="sno-cell"
    serialNumberContainer.appendChild(snocell);
}
}

//editable row
function createRow(rowNumber){
    //each row has 26 cols\
    const row=document.createElement("div");
    row.className="row";
    for(let i=1;i<=coulmns;i++){
        const cell=document.createElement("div");
        cell.className="main-cell";
        cell.contentEditable=true;
        row.appendChild(cell);
        cell.id=String.fromCharCode(64+i)+(rowNumber+1);
        //adding focus event for every cell
       cell.addEventListener("focus",onCellFocus);
    }
mainContainer.appendChild(row);
}


 function buildMainSection(){
 for(let i=1;i<=rows;i++){
    createRow(i)
 }
 }




createSerialNumberCells();
createRow()
createHeaderCells();
buildMainSection();