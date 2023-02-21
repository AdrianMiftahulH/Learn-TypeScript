"use strict";
// Learn Generic
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Joni" }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return {
        arg,
        is: !!arg
    };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Adrian'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({
    name: "Adrian"
}));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return {
        value: arg,
        is: !!arg
    };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({
    id: 1,
    name: ' Adrina'
}));
// console.log(processUser({
//     name: ' Adrina'
// })); -> error
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const userArray = [
    {
        "id": 1,
        "name": "Adrian",
        "username": "adrian",
        "email": "adrian@gmail.com",
        "address": {
            "street": "Kamarung",
            "suite": "No. 19",
            "City": "Cimahi",
        }
    },
    {
        "id": 2,
        "name": "Adriana",
        "username": "adriana",
        "email": "adrianaaa@gmail.com",
        "address": {
            "street": "Kamarung01",
            "suite": "No. 21",
            "City": "Cimahi",
        }
    }
];
console.log(getUsersProperty(userArray, "email"));
// Generic Class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Eha");
console.log(store.state);
store.state = "Adrian";
// store.state = 12
const myState = new StateObject([15]);
myState.state = (['Adrian', 19, true]);
console.log(myState.state);
