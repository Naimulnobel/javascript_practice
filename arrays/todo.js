const toDo=['task1','task2','task3','task4','task5']
// console.log(toDo.length)
// console.log(toDo[toDo.length-1],toDo[toDo.length-2])
//Chalange Area
// toDo.shift()
// toDo.splice(1,1)
// toDo.push('yo yo')
console.log(`you have ${toDo.length} to do list`)
// toDo.forEach(function (todo,index) {
//     console.log(`${index}.${todo}`)
    
// })
for (let index = 0; index < toDo.length; index++) {
     console.log(`${index+1}th Task is ${toDo[index]}`)
    
}
