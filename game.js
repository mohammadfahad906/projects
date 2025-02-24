let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let cont = document.querySelector(".container");
const resets = document.querySelector(".reset");
let option = document.querySelectorAll("option");
console.log(boxes);

let chance = true;
boxes.forEach((box) => {
  box.onclick = () => {
    if (chance === true) {
      chance = false;
      box.innerText = "x";
    } else {
      chance = true;
      box.innerText = "0";
    }
    box.disabled = true;
    checkwinner();
  };
});
option = ["", "", "", "", "", "", "", ""];
const winner = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let allfilled = true;
let checkwinner = () => {
  for (let val of winner) {
    let p1 = boxes[val[0]].innerText;
    let p2 = boxes[val[1]].innerText;
    let p3 = boxes[val[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        console.log("winner", p1);
        showWinner(p1);
      }
    }
  }
  let allfilled = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      allfilled = false;
    }
  });
  if (allfilled) {
    msg.innerText = "match draw";
    cont.classList.remove("container");
  }
};
let showWinner = (p1) => {
  msg.innerText = `congratulation you are winner ${p1}`;
  disablebox();
  cont.classList.remove("container");
};
let disablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

resets.addEventListener("click", (evt) => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });

  chance = true; // Reset the chance
  msg.innerText = "Player X's turn"; // Reset message
  cont.classList.add("container"); // Restore the class
});



