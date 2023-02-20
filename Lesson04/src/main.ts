// Learn Assertions


type One = string
type Two = string | number
type Three = 'Hello'

// convert to more or less specific 
let a:One = 'Hello World'
let b = a as Two // Less Specific
let c = a as Three // more Specific

let d = <One> 'world' 
let e = <string | number> 'world' 

const addOrConcat =(a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string

// Be careful because TS sees no prblem , but a string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number

// 10 as string 
(10 as unknown) as string

// the DOM

const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src