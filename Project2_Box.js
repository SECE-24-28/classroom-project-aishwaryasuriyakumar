// Select elements using only querySelector
let text = document.querySelector("#text");
let box = document.querySelector("#box");
let itemInput = document.querySelector("#itemInput");
let list = document.querySelector("#list");

// Select ALL buttons in order (no class, no id)
let btns = document.querySelectorAll("button");

// Button mapping by order they appear in HTML
let changeTextBtn = btns[0];
let changeColorBtn = btns[1];
let hideBoxBtn = btns[2];
let showBoxBtn = btns[3];
let addItemBtn = btns[4];

// 1️⃣ Change text
changeTextBtn.addEventListener("click", () => {
  text.textContent = "Text changed using addEventListener!";
});

// 2️⃣ Change background color of box
changeColorBtn.addEventListener("click", () => {
  box.style.background =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// 3️⃣ Hide box
hideBoxBtn.addEventListener("click", () => {
  box.style.display = "none";
});

// 4️⃣ Show box
showBoxBtn.addEventListener("click", () => {
  box.style.display = "flex";
});

// 5️⃣ Add item
addItemBtn.addEventListener("click", () => {
  if (itemInput.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = itemInput.value;
    list.appendChild(li);
    itemInput.value = "";
  }
});
