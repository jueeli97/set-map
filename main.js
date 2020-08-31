var setObj = new Set();
setObj.add(1);
setObj.add(2);
setObj.add(3);
setObj.add(4);
setObj.add(4);
setObj.add(5);
setObj.add("JavaScript");
setObj.add("javaScript");

setObj
.forEach((leElement)=>{
    console.log(leElement);
})



let numArray = [1,2,3,4,5,4,3,2,,6,7,8,6,9];

let elementSetObj = new Set();

numArray
.forEach((leElement)=>{
    elementSetObj.add(leElement)
});

elementSetObj
.forEach((leElement)=>{
    console.log(leElement);
});



// MAP

let mapObj = new Map();
mapObj.set(1, "Jueeli");
mapObj.set(2, "Riya");
mapObj.set(3, "Ankita");
mapObj.set(3, "Ankita1");

let value = mapObj.get(1);
console.log(value);

value = mapObj.get(3);
console.log(value);


let mapArrayObj = new Map();
let counter = 1;

numArray
.forEach(leElement =>{
    mapArrayObj.set(counter, leElement);
    counter++;
});

let getElement = mapArrayObj.get(3);
console.log(getElement);

// mapArrayObj
// .forEach(leElement=>{
//     console.log(leElement);
// })