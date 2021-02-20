const notes = [{title:'Note 1'}, {title:'Note 2'},{title:'Note 3'}]
// console.log(notes.length)
// console.log(notes[notes.length-1])
// notes.push('Note 4')
// console.log(notes)
// notes.pop()
// notes.push('my new note')
// notes.shift()
// notes.unshift('YoYo')
// notes.forEach(function(item,index){
//     console.log(item,index)
// })
// const index=notes.findIndex(function(note,index){
//     return note.title==='Note 1'
// })
// console.log(index)
// const findNote=function(notes,noteTitle){
//     const index=notes.findIndex(function(note){
//         return note.title===noteTitle;
//     })
//     return notes[index]
// }
const findNotes= function (notes,query) {
    return fiteredNotes=notes.filter(function(note){
        const isTitedMatched = note.title.toLowerCase().includes(query.toLowerCase())
        return isTitedMatched
    })
    
}
const sortNotes=function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase()<b.title.toLowerCase()){
            return -1

        }else if(b.title.toLowerCase()<a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}
// const note=findNote(notes,'Note 2')
// console.log(note)
//console.log(findNotes(notes,'te'))