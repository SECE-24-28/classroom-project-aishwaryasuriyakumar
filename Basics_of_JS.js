//TYPES O DELCARATION OF VARIALES:
//1.var
//2.let
//3.const

//THERE ARE TWO TYPES OF GLOBAL EXECUTION CONTEXT
//1.EXECUTION PHRASE
//2.MEMORY PHRASE
console.log(a);
//hoisting
var a = 10;
//global scope / Function scope

//ES6
//"Let n const"clear
//console.log(b);
//Refernce error
//Temporal dead zone - is time gap between execution phase n memory phase
 
let b = 20;
b = 130;
//"let" can be reinitialized first b =20,then b=130 is allowed no error occurs.

//block scope
console.log(b);
//{
//    let b = 30;
//    console.log(b);
//}

console.log(c);
const c = 40;
c = 70;
//"const" cannot be reinitialized first c =40,then b=70 is not allowed TYPERROR occurs.
console.log(c);

//TYPES OF FUNCTION:
//1.Name Function
//2.function Expression
//3.Arrow Function(ES6)
//4.Rollback Function
//5.IIFE(immediately Invoked Function Expression)

//1.Name Function
//func declaration
function namedFunc() { 
    console.log("NamedFunction called");
    console.log("NamedFunction called");
    console.log("NamedFunction called");
    
}

//Func call/invoaktion
namedFunc();
//FuncExp();
//2.Function Expression

let funcExp=Function(){
    console.log("Function expression called");
};

funcExp();

//3.Arrow Function(ES6)
let arrow = () => {
    console.log("arrow Functio  called");
};

arrow();

//4.Callback Function n 5.IIFE
(() => {
    console.log("callback n iie called");
})();

const addTwoNumbers = (a, b) => { 
    console.log(a, b);

    let n1 = a || 10;
    let n2 = b || 20;
    let sum = n1 + n2;

    console.log("the sum of two numbers is:", sum);
    console.log(`the sum of two numbers is:${sum}`, sum);
    //the sum of a value is value n b value is value
};


addTwoNumbers(20, 50);
addTwoNumbers(40, 50);

addTwoNumbers();

let a = 10;
let b = "2";
console.log(2 === "2");

let c = [1, 2, 3, "aaa"];
let d = [1, 2, 3, "aaa"];
console.log(c[0]===d[0]);

let arr = [1, 2, 3, 4, 5];

//for loop
for (let i = 0;i<arr.length;i++){
    arr[i] = arr[i] + 1;
}
console.log(arr);

let arr = [1, 2, 3, 4, 5];
//for each
arr1.foreach((element, index) => {
    console.log(element, index);
});

let arr2 = [1, 2, 3, 4, 5];
    //let aa=arr.map(el,ind)=>{
        //return el+ind;
//});
let a = arr.map((el, ind) => +ind);
console.log(arr2);
console.log(aa);
        

