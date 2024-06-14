#!/usr/bin/env node
import LinkedList from "./linkedList.js"

const newList = new LinkedList();
console.log(newList.size())
console.log(newList.headS())
newList.append(3)
newList.append(3)
newList.append(5)
newList.append(10)
newList.prepend(20)
console.log(newList.size())
console.log(newList.headS())
