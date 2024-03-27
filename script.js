const container = document.querySelector('.container');
const button = document.querySelector('button');


button.addEventListener("click",()=>{
    let input = prompt("Enter the number of squares");
    gridNo = Number(input);
    doStuff(gridNo);
})



function doStuff(gridNo){
    container.textContent = '';
for (let i = 0; i < gridNo; i++) {
    for (let j = 0; j < gridNo; j++) {
        const square = document.createElement("div");
        square.style.width = `${800/gridNo}px`;
        square.style.height = `${800/gridNo}px`;
        square.style.border = "1px solid black";
        square.style.backgroundColor = "white";
        container.appendChild(square);
        square.addEventListener("mouseover",()=>{
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = "#" + randomColor;
        });
    }   
}
}