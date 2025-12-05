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
