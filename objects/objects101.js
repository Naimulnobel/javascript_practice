let myBook ={
    title:'1984',
    author:'George Orwell',
    pageCount:325
}
console.log(myBook.title)
// chanlange area
 let person={
    name:'Nobel',
    age:26,
    location:'Dhaka, Bangladesh'
 }
 console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
 //person.age = 27
 person.age++
 console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

 let person2 ={} ;
 Object.assign(person2, person);
 person2.name = "Dip";

 console.log(person2);
 console.log(person)