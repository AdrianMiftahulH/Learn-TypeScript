"use strict";
// Learn Assertions
// convert to more or less specific 
let a = 'Hello World';
let b = a; // Less Specific
let c = a; // more Specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful because TS sees no prblem , but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string 
10;
// the DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
