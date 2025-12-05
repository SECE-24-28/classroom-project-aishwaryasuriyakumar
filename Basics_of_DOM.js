// DOM - DOCUMENT OBJECT MODEL

// TYPES OF SELECTOR:
// 1.TAG SELECTOR
// 2.CLASS SELECTOR
// 3.ID SELECTOR
// 4.QUERY SELECTOR
// 5.QUERY SELECTOR ALL

// 1. Tag Selector
let heading = document.getElementsByTagName("h1");
// htmlCollection.Array
console.log(heading1(1));

// 2. Class Selector
let cl = document.getElementsByClassName("a");
//htmlCollection.Array
console.log(cl(0));

// 3. ID Selector 
let idd = document.getElementById("b");
// it will return Single Element and the first element
console.log(idd);

// 4. QuerySelector (it works on all the three selectors)
let sel = document.querySelector("#b");
// it will return Single ELement and the first ELement
console.log(sel);

//5. QuerySelector All
let d = document.querySelector("#b");
// NodeList Array
console.log(d);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Read n Write operation:
// let head = document.querySelector("p");

// //Read operation
// console.log(head.textContent);

// //Write operation
// head.textContent = "This is the new paragraph content";

// let div = document.querySelector("div");
// div.innerHTML = "<p>Hello From Para</p>";
// //div.textContent ="<p>HEllo from para</p>";
// console.log(div.textContent);
// console.log(div.innerHTML);


//add/remove/toggle class
//toggle means combination of both add n remove
//if the class is already existing then, remove
//if the class is not present, then add the class

let head = document.querySelector("h1");
console.log(head);

head.classList.add("color");
head.classList.remove("border");
head.classList.toggle("background");

//styling 
let p = document.querySelector("p");
p.style.color = "red";
p.style.backgroundColor = "green";
