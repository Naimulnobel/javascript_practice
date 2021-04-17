// const notes = [{title:'Note 1'}, {title:'Note 2'},{title:'Note 3'}]
const notes=getSaveNotes()

const filteredData={
    searchText:""
}

// const user1={
//     name:'nobel',
//     age:16
// }
// const user2= JSON.stringify(user1)
// //localStorage.setItem('location','Dhaka')
// const userJson= localStorage.setItem('location',user2)
// const userJson=localStorage.getItem('location')
//  const user=JSON.parse(userJson)
// console.log(`${user.name} is ${user.age} year old`)
// localStorage.removeItem('location')
// localStorage.clear()

reanderNotes(notes,filteredData)
//Document object model
//Query and remove
//const paragrph=document.querySelector('p')

//Query all and remove
// const ps=document.querySelectorAll('p')
// ps.forEach(function(p){
//     console.log(p.textContent)
    //p.remove()
// })
//add a new element
// const newP=document.createElement('p')
// newP.textContent='This a Supper element'
// document.querySelector('body').appendChild(newP)
document.getElementById('normal').addEventListener('click',function(e){
    // console.log(e)
    // e.target.textContent="this button was clicked"
    e.preventDefault()
    notes.push({
        title:'',
        body:''

    })
    localStorage.setItem('notes',JSON.stringify(notes))
    reanderNotes(notes,filteredData)
})
document.getElementById('remove').addEventListener('click',function(e){
    // console.log(e)
    
    document.querySelectorAll('.header').forEach(function(header){
        header.remove()
    })
    
        
})
document.querySelector("#search").addEventListener('input',function(e){
    filteredData.searchText= e.target.value
    reanderNotes(notes,filteredData)

})
document.querySelector("#add-from").addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value=''
})
