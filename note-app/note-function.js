console.log(uuidv4())
//read existing notes for localstorage
const getSaveNotes=function(){
    const notesJson=localStorage.getItem('notes')
    if(notesJson!=null){
        return JSON.parse(notesJson)
    }else{
        return []
    }
}
// generate the dom element
const generateNoteDom=function(notes){
    const noteEl=document.createElement('p')
    if (notes.title.length>0){    
        noteEl.textContent=notes.title
    
    }else{
        
       noteEl.textContent='Unamed Notes'
    }
    return noteEl
}

// render notes function
const reanderNotes=function(notes,filteredData){
    const filteredNotes=notes.filter(function(note){
        return note.title.toLowerCase().includes(filteredData.searchText.toLowerCase())

    })
    document.querySelector('#note').innerHTML=""
    filteredNotes.forEach(function(notes){
        const noteEl=generateNoteDom(notes)
        document.querySelector('#note').appendChild(noteEl)
        
    })
}