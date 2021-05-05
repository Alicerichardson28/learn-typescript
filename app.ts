// string, number, boolean

import { NumericLiteral, SelectionRange } from "typescript";

// Literal type
let myName ="Alice";
myName = "Taylor"

let age = 29;

let favColor: string;
// let favColor: string;
favColor = "red"

// function can specific return type
const add =(num1: number, num2?: number):number => {
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


// Skip Tuple,Enum

// void mean function not return
const greeting = (text: string): void => {
    console.log(text)
}

// console.log() can accept any type
const consoleLog = (...data: any[]):void => {

}

const logging = (data: string | number): never => {
    throw new Error("Error")
}

fetch("www.google.com")

type MyType = string | boolean | "alice";
type MyType2 = {
    name: string;
    age: number;
    isMarried: boolean;
}

// interface
interface AdultPerson {
    name: string;
    age: number;
    isMarried: boolean;
}

interface RichPerson {
    isRich: boolean
}

type mix = AdultPerson & RichPerson

class BayFamily implements AdultPerson, RichPerson {
    name ="";
    age = 0
    isMarried = false;
    isRich = false;

    constructor(name: string, age: number, isMarried: boolean) {
        this.name = name
        this.age = age;
        this.isMarried = isMarried;
    }
}

