"use strict";
// Learn Functions
// Literal Types
let myName;
let userName;
userName = "Adrian";
// functions
const add = (a, b) => {
    return a + b;
};
// membuat funtion untuk console log
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello Baby!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 4)); // panggil dulu function logMsg untuk console log, lalu untuk parameter nya dengan memanggil funtion multiply dengan parameter number
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
// default parameter value
const sumAll = (a = 3, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
// 1.
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5));
// 2.
const total2 = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// logMsg(total2(1)) -> output error ( main.js:47 Uncaught TypeError: Reduce of empty array with no initial value )
logMsg(total2(12, 3, 4));
logMsg(total(2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// cunstom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError(`this should never happen`);
};
