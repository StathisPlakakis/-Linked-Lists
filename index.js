#!/usr/bin/env node
import LinkedList from "./linkedList.js"

const newList = new LinkedList();

newList.append(3)
newList.append(3)
newList.append(5)
console.log(newList.tail())
newList.append(10)
newList.prepend(20)
newList.pop()
console.log(newList.find(50))