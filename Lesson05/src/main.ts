// Learn Classes

class Coder {
    // property
    // name: string 
    // music: string
    // age: number
    // lang: string
    secondLang!:string

    // method
    constructor(
        public readonly name: string, // bila kita tambahin public/readonly/private/protected di dalam parameter nama yang sama dengan property maka akan error deplicate
        public music: string, 
        private age: number, 
        protected lang: string = 'Typescript' // default value
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge(){ //buat func public untuk age karena age persivate private
        return ` Hello, i'm ${this.age} old`
    }
}

const Adrian = new Coder('Adrian', 'Jazz', 19)

console.log(Adrian.getAge());
console.log(Adrian.name);
console.log(Adrian.music);

// Parent Classes

class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music: string, 
        age: number
    ){
        super(name, music, age) // keyword super didalam method super tersebut kita akan menginisialisikan parameter yang dibutuhkan parent classnya. Dengan mengimplementasikan block code diatas maka kita dapat melihat dan mengakses properti yang ada seperti biasa
        this.computer = computer
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const Fitri = new WebDev('Mac', 'Fitri', 'Lofi', 27)
console.log(Fitri.getLang());


///////////////////////////////////
// Dalam typescript interface juga digunakan untuk mendefinisikan sebuah object. Interface hanya berisi deklarasinya saja untuk definisinya ditulis di kode lain. Jadi dari sini kita dapat artikan sebagai sebuah perjanjian jika sebuah object mengimplementasikan sebuah interface. 
interface Musician{
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician{
    name: string
    instrument: string
    
    constructor(
        name: string,
        instrument: string
        ){
            this.name = name
            this.instrument = instrument
        }
        
        play(action: string) {
            return `${this.name} ${action} the ${this.instrument}`
        }
    }
    
    const Page = new Guitarist("Eva", "guitar")
    console.log(Page.play('strums'));
    
///////////////////////////////////

class Peeps{
    static count: number = 0
    
    static getCount(): number{
        return Peeps.count
    } 
    
    public id: number
    
    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const Eha = new Peeps("Eha")
const Ani = new Peeps("Ani")
const Saskia = new Peeps("Saskia")

console.log(Peeps.count); // 4 , jumlah object
console.log(Eha.id); // 1

///////////////////////////////////

class Bands{
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]){
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        }else throw new Error('Param is not an array of strings')
    }
}

const myBands = new Bands()
myBands.data = ['Adrian', 'Della', 'Faiza']
console.log(myBands.data);

myBands.data = [...myBands.data,'ZZ top'] // push/nambah data array
console.log(myBands.data);
