// Original Js code
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// 1st variation :
// let year: HTMLElement | null ->  buat dulu variabel dengan tipe data 
// year = document.getElementById('year') -> panggil variabel yang telah dibuat lalu buat dom

// let thisYear: string ->  buat dulu variabel dengan tipe data 
// thisYear = new Date().getFullYear().toString() -> panggil variabel yang telah dibuat lalu buat date dan ubah ke string

// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }

// 2st variation :
const year = document.getElementById('year') as HTMLSpanElement // langsung buat varibel bersama tipe data lalu buat dom dengan alias htmlspanelelment
const thisYear: string = new Date().getFullYear().toString()

year.setAttribute("datetime", thisYear)
year.textContent = thisYear