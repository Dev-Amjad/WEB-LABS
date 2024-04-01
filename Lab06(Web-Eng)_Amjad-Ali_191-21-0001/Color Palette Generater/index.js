
x = 0;

function myfunc(){
    if(x<=10)
    {
    const container = document.getElementById('container')
    const column = document.createElement("column")
    column.className = "column"
    container.append(column)
    x++
    applyRandomColor()
    }
    else{
        alert("Stack is full")
    }
}

const btnRandomColor = document.getElementById("btn2")
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyRandomColor() {
    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
        column.style.backgroundColor = getRandomColor();
    });
}

btnRandomColor.addEventListener("click", applyRandomColor);



