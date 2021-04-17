// const saveTodo=function(){
//     const todoss=localStorage.getItem('todo')
//     if (todoss!=null){
//       return JSON.parse(todoss)
//     }else{
//         return []
//     }
// }

// const generateTodoDom= function(todo){
//     const newP=document.createElement('div')
//     const inputChek=document.createElement('input')
//     inputChek.setAttribute('type','checkbox')
//     const spanT1=document.createElement('span')
//     const button=document.createElement('button')
//     button.textContent='x'
//     button.addEventListener('click',function(){
//         const todoIndex=todo.findIndex(function(todos){
//         return todos.id===todo.id
//         })
//         if(todoIndex>-1){
//             todo.splice(todoIndex,1)
//         }
    
//         saveTodo(todo)
        
       
//     })
//     if (todo.task.length>0){
//         newP.appendChild(inputChek)
//         spanT1.textContent=todo.task

//         newP.appendChild(spanT1)
//         newP.appendChild(button)
//     }
//     else
//     {
//         newP.appendChild(inputChek)
//         spanT1.textContent='Unamed Todo'
//         newP.appendChild(spanT1)
//         newP.appendChild(button)
//         reanderNotes(todo,filteres)
        
//     }
//     return newP
// }
// const reanderNotes=function(todo,filteres){
//     // let filteredNote=todo.filter(function(todo){
//     //     return !todo.completed
//     // })
//     let filteredNotes=todo.filter(function(todo){
//         return todo.task.toLowerCase().includes(filteres.searchText.toLowerCase())
//     })
//     filteredNotes= filteredNotes.filter(function(todo){
//         return !todo.completed||!filteres.hide
//     })
    
//     document.querySelector('#search-text').innerHTML=''
//     const newHeader=document.createElement('h2')
//     // newHeader.textContent=`You Have ${filteredNote.length} todos left`
//     document.querySelector('#search-text').appendChild(newHeader)
//     filteredNotes.forEach(function(todo){
//         const newP=generateTodoDom(todo)
//         document.querySelector('#search-text').appendChild(newP)
//     }) 
    
// }
// const saveTodos=function(todo){
//     localStorage.setItem('todo',JSON.stringify(todo))
// }
// // const removeTodo=function(id) {
    
// //     // if (todoIndex>-1){
// //     //     todo.splice(todoIndex,1)
// //     // }
    
// // }
// Fetch existing todos from localStorage
// Fetch existing todos from localStorage
// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}
//toggle completed value for a given todo
const toggleTodo=function(id){
    const todo= todos.find(function(todo){
        return todo.id===id
    })
    if(todo!==undefined){
        todo.completed=!todo.completed
    }
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked=todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change',function(){
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })
    // Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}