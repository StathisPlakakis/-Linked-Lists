#!/usr/bin/env node
import LinkedList from "./linkedList.js"

const newList = new LinkedList();
console.log(newList.toString())
newList.append(3)
console.log(newList.toString())
newList.append(3)
console.log(newList.toString())
newList.append(5)
console.log(newList.toString())
newList.append(10)
console.log(newList.toString())
newList.prepend(20)
console.log(newList.toString())
newList.pop()
console.log(newList.toString())
newList.prepend(25)
console.log(newList.toString())