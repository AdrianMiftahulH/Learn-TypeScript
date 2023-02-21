// Learn Generic

const echo = <T>(arg: T): T => arg 

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
} 

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({name: "Joni"}));
console.log(isObj(null));

const isTrue = <T>(arg: T): {
    arg: T,
    is: boolean
} => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false}
    }
    return {
        arg,
        is: !!arg
    }
}

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

interface BoolCheck<T>{
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false}
    }
    return {
        value: arg,
        is: !!arg
    }
}


interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here
    return user
}

console.log(processUser({
    id: 1,
    name: ' Adrina'
}));
// console.log(processUser({
//     name: ' Adrina'
// })); -> error


const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

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
        "id":2,
        "name": "Adriana",
        "username": "adriana",
        "email": "adrianaaa@gmail.com",
        "address": {
            "street": "Kamarung01",
            "suite": "No. 21",
            "City": "Cimahi",
        }
    }
]

console.log(getUsersProperty(userArray, "email"));


// Generic Class

class StateObject<T> {
    private data: T

    constructor(value: T){
        this.data = value
    }

    get state(): T{
        return this.data
    }

    set state(value: T){
        this.data = value
    }
}

const store = new StateObject("Eha")
console.log(store.state);

store.state = "Adrian"
// store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (['Adrian', 19, true])
console.log(myState.state);
