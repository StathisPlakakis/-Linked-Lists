#!/usr/bin/env node
import LinkedList from "./linkedList.js"

const newList = new LinkedList();
console.log(newList.size())
console.log(newList.headS())
console.log(newList.tail())
newList.append(3)
newList.append(3)
newList.append(5)
console.log(newList.tail())
newList.append(10)
newList.prepend(20)
console.log(newList.size())
console.log(newList.headS())
console.log(newList.tail())
console.log(newList.at(0))
newList.pop()
console.log(newList.tail())

