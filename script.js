let boxes = document.querySelectorAll(".box");
let re = document.querySelector(".reset");
let display = document.getElementById('win');

let tO = true;
let tX = false;

const winpatt = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (tO == true) {
            box.innerText = "O";
            tO = false;
            tX = true;
        }
        else if (tX == true) {
            box.innerText = "X";
            tX = false;
            tO = true;
        }
        winner();
    })
})

const winner = () => {
    for (let pattern of winpatt) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "--" && val2 != "--" && val3 != "--") {
            if (val1 == val2 && val2 == val3) {
                display.innerText = `Winner is ${val1}`;
                display.classList.add('show');
                tO = false;
                tX = false;
            }
        }
    }
}

re.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "--";
    })
    display.innerText = "--";
    display.classList.remove('show');
    tO=true;
    tX=false;
})

