// Learn Functions

// Type Aliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber 

// Literal Types

let myName: "Adrian"

let userName: "Adrian" | "Eha" | "Isal"
userName = "Adrian"

// functions
const add = ( a: number, b: number): number => { //parameter wajib pake dengan type data, lalu number/type data sesudah parameter yaitu untuk mengembalikan nilai sesuai tipe data
    return a + b
}

// membuat funtion untuk console log
const logMsg = (message: any): void => { //void itu untuk tidak di kembalikan lagi nilai value nya
    console.log(message);
}

logMsg("Hello Baby!")
logMsg(add(2, 3))

let subtract = function(c: number, d: number) : number {
    return c - d
}

// Membuat dulu tipe yang akan di gunakan dengan nama type mathFunction
type mathFunction = ( a:number, b: number) => number

let multiply: mathFunction = function(c, d){ // untuk tipe data nya dapat dipanggil dengan mathfunction yang telah dibuat
    return c * d
}


logMsg(multiply(2, 4)) // panggil dulu function logMsg untuk console log, lalu untuk parameter nya dengan memanggil funtion multiply dengan parameter number

// optional parameters
const addAll = ( a:number, b: number, c?: number): number => { //? tanda untuk parameter optional/boleh dipake atau tidak
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b
}

logMsg(addAll(2,3,4))
logMsg(addAll(2,3))

// default parameter value
const sumAll = ( a:number = 3, b: number, c: number = 2): number => { //? tanda untuk parameter optional/boleh dipake atau tidak
    
    return a + b + c
}

logMsg(sumAll(2,3))
logMsg(sumAll(undefined,3))

// Rest Parameters
// 1.
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4,5))
// 2.
const total2 = (a:number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

// logMsg(total2(1)) -> output error ( main.js:47 Uncaught TypeError: Reduce of empty array with no initial value )
logMsg(total2(12, 3, 4))
logMsg(total(2, 3, 4));

const createError = (errMsg: string): never => { //never digunakan untuk mewakili nilai yang tidak seharusnya terjadi. Misalnya, Anda dapat menetapkan never sebagai jenis pengembalian fungsi yang tidak pernah kembali. Hal ini bisa terjadi bila sebuah fungsi selalu melempar kesalahan atau saat macet dalam perulangan tak terbatas.
    throw new Error(errMsg)
}
const infinite = () => {
    let i: number = 1
    while (true){
        i++
        if(i > 100) break
    }
}

// cunstom type guard
const isNumber = (value:any):boolean => {
    return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrString = (value: number | string):
string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return createError(`this should never happen`)
}



