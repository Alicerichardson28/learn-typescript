// string, number, boolean

import { NumericLiteral, SelectionRange } from "typescript";

// Literal type
let myName ="Alice";
myName = "Taylor"

let age = 29;

let favColor: string;
// let favColor: string;
favColor = "red"

const add =(num1: number, num2?: number) => {
// const add =(num1: number, num2: number = 5) => {
    if (!num2) {
        return num1;
    } else {
        return num1 + num2;
    }
};

const result = add(1,2);


type Person = {
    name: string;
    age: number;
    hobbies: string[];
    favNumbers: Array<number>;
};

const person: Person = {
    name: "Alice",
    age: 20,
    hobbies: ["cooking", "eating"],
    favNumbers: [1,2,3,4]
};

// Union Type
type DynamicName = string | number;

const friend10: DynamicName = "Alice";
const friend11: DynamicName = 500;

// /Intersection
type kid = {
    name: string;
    age: number;
};

type Nickname = {
    nickname: string;
};

const human: kid & Nickname = {
    name: "Dek",
    age: 5,
    nickname: "Alice",
};

const friend1: DynamicName = "oil";
const friend2: DynamicName = 50;

type NestObject = {
    mom: {name: string; age:number; children: string[]; x:{key1: string} };
};

// Literal
type Gender = "female" | "male";

const bay:Gender = "male";