"use strict";
// Learn Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "smkcmi2",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignment(assign1, {
    grade: 95
}));
const assignGraded = updateAssignment(assign1, {
    grade: 95
});
// Required  and Readonly
const recordAssignment = (assign) => {
    // send to database, etx
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Adriana: "A",
    Della: "B"
};
const gradesData = {
    Adriana: {
        assign1: 90,
        assign2: 95
    },
    Della: {
        assign1: 93,
        assign2: 91
    },
};
const score = {
    studentId: "smkcmi201",
    grade: 89
};
const preview = {
    studentId: "smkcmi201",
    title: "Final Project",
};
// ReturnType
// type newAssign = {
//     title: string,
//     points: number
// }
const createNewAssign = (title, points) => {
    return {
        title,
        points
    };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = [
    "Generics",
    100
];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
fetchUsers().then(users => {
    console.log(users);
});
