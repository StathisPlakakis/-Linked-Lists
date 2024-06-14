#!/usr/bin/env node
import LinkedList from "./linkedList.js"

const newList = new LinkedList();
newList.append(3)
newList.append(4)
newList.append(5)
newList.append(10)
newList.prepend(20)
newList.pop()
newList.prepend(25)
newList.insertAt(100,2)
newList.removeAt(0)
console.log(newList.toString())

