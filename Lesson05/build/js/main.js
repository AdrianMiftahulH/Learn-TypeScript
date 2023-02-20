"use strict";
// Learn Classes
class Coder {
    // method
    constructor(name, // bila kita tambahin public/readonly/private/protected di dalam parameter nama yang sama dengan property maka akan error deplicate
    music, age, lang = 'Typescript' // default value
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return ` Hello, i'm ${this.age} old`;
    }
}
const Adrian = new Coder('Adrian', 'Jazz', 19);
console.log(Adrian.getAge());
console.log(Adrian.name);
console.log(Adrian.music);
// Parent Classes
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); // keyword super didalam method super tersebut kita akan menginisialisikan parameter yang dibutuhkan parent classnya. Dengan mengimplementasikan block code diatas maka kita dapat melihat dan mengakses properti yang ada seperti biasa
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Fitri = new WebDev('Mac', 'Fitri', 'Lofi', 27);
console.log(Fitri.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Eva", "guitar");
console.log(Page.play('strums'));
///////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Eha = new Peeps("Eha");
const Ani = new Peeps("Ani");
const Saskia = new Peeps("Saskia");
console.log(Peeps.count); // 4 , jumlah object
console.log(Eha.id); // 1
///////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['Adrian', 'Della', 'Faiza'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ top']; // push/nambah data array
console.log(myBands.data);
