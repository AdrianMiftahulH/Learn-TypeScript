// Learn Array and Objects


// Arrays
let stringArr = ['one', 'day','adrian'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 2003, true];

stringArr[0] = 'Dinda'
stringArr.push('heyy')

guitars[0] = 1212
guitars.unshift('nino')

let test = []
let bands:string[] = []
bands.push("Adrian Miftahul Haq")


// Tuple
let myTuple: [string, number, boolean] = ["Eha", 50, true];

let mixed = ['Dinda', 1, true]

mixed = myTuple

// output
console.log(stringArr); // (4) ['Dinda', 'day', 'adrian', 'heyy']
console.log(guitars); // (4) ['nino', 1212, 'Les Paul', 5150]
console.log(mixedData); // (3) ['EVH', 2003, true]
console.log(bands); // ['Adrian Miftahul Haq']
console.log(mixed); // (3) ['Eha', 50, true]

// Objects
let myObj: object
myObj = []
console.log(typeof myObj);

myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'adriana',
    prop2: true,
}

exampleObj.prop1 = "adrian Miftah"

interface Guitarist  {
    name?: string,
    active?: boolean, // ? untuk menandakan bahwa prop ini optional bisa di isi atau tidak
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Fitri",
    active: false,
    albums: [1945, 2004, "AL01"]
}

let jp: Guitarist = {
    name: "Eva",
    albums: [2023, "II", "IV"]
}

const greetGuitarist = (guitarist: Guitarist) => { // membuat function dengan parameter dari variabel terhubung dengan interface
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello no Name !';
}
console.log(evh); // {name: 'Fitri', active: false, albums: Array(3)}
console.log(jp); //{name: 'Eva', albums: Array(3)}
console.log(greetGuitarist(jp)); //memanggil function dengan parameter jp(variabel), output => Hello EVA !

// Enums
// Typescript Enum digunakan untuk mendefiniskan atau menge-set suatu value dengan sifat constant atau istilah yang disebut dengan Initialization (Inisiasi).. Perlu diketahui juga bahwa Enum pada Typescript bukan merupakan Type Level Extension. Pada Typescript enum disediakan dalam bentuk numeric dan string atau bahkan keduanya. Untuk mendefiniskan Enum kita menggunakan keyword enum

enum Grade {
    U = 4,
    D,
    C,
    B,
    A,
}

console.log(Grade.U); //ouptput => 4
