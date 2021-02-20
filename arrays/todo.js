// const toDo=['task1','task2','task3','task4','task5']
// console.log(toDo.length)
// console.log(toDo[toDo.length-1],toDo[toDo.length-2])
//Chalange Area
// toDo.shift()
// toDo.splice(1,1)
// toDo.push('yo yo')
// console.log(`you have ${toDo.length} to do list`)
// toDo.forEach(function (todo,index) {
//     console.log(`${index}.${todo}`)
    
// })
// for (let index = 0; index < toDo.length; index++) {
//      console.log(`${index+1}th Task is ${toDo[index]}`)
    
// }
const todo=[{
    task:'Clean the jar',
    completed:false,
},{
    task:'Clean the house',
    completed:false,
},
{
    task:'Clean the house',
    completed:true,
}]
const deleteIndex=function(todo,todoText){
    const index=todo.findIndex(function(todo){
        return todo.task.toLowerCase()===todoText.toLowerCase()
    })
    if (index>-1){
        todo.splice(index,1)
    }
}
// deleteIndex(todo,"Clean the house")
// console.log(todo)
const getThingDone= function(todo){
    return todo.filter(function(todo){
        return todo.completed===true
    })
}
const sortTodo=function(todo){
    todo.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1

        }else if(!b.completed && a.completed){
            return 1
        }
        else{
            return 0
        }
    })
}
//console.log(getThingDone(todo))
sortTodo(todo)
console.log(todo)
console.log()