// const todo=[{
//     task:'Clean the jar',
//     completed:false,
// },{
//     task:'Clean the house',
//     completed:false,
// },
// {
//     task:'Clean the house',
//     completed:true,
// }]
// let todo=saveTodo()

// const pragrah=document.querySelectorAll('p')
// pragrah.forEach(function(p){
//     if(p.textContent.includes('the')){
//         p.remove()
//     }
    
// })

// const filteres={
//     searchText:"",
//     hide:false
// }

// renderTodos(todo,filteres)
// todo.forEach(function(todo){
    
//     if (todo.completed==false){
//         document.querySelector('#search-area').innerHTML=''
//         const newP=document.createElement('p')
//         newP.textContent=todo.task
//         document.querySelector('#search-area').appendChild(newP)
        
//     }
    
// })
// document.querySelector('button').addEventListener('click',function(e){
//     console.log('add Todo')
// })
// document.querySelector('#add-todo').addEventListener('input',function(e){
//     filteres.searchText=e.target.value
//     reanderNotes(todo,filteres)
// })
// document.querySelector('#todo').addEventListener('submit',function(e){
//     e.preventDefault()
    // let todos= e.target.elements.todos.value

    // todo.push({task:todos,
    //     completed:false})
    // reanderNotes(todo,filteres)
    // todo.push({
    //     id:uuidv4(),
    //     task:e.target.elements.todos.value,
    //     completed:false
    // })
    // e.target.elements.todos.value=''
    // saveTodos(todo)
    // renderTodos(todo,filteres)
    // const pragraph=document.createElement('p')
    // pragraph.textContent=todos
    // document.querySelector('#search-text').appendChild(pragraph)

// })
// document.querySelector('#for-fun').addEventListener('change',function(e){
    
//     filteres.hide= e.target.checked
//     renderTodos(todo,filteres)

    
// })
let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})