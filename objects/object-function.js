let myBook ={
    title:'1984',
    author:'George Orwell',
}

let summary = function (book) {
    console.log(`${book.title} by ${book.author}`)
}
summary(myBook)
    
//chalange
let convertFahrenheit= function(temp){
    return{
        convert:`${temp} is Fahrenheit, Celcious is ${(temp-32)*(5/9)} and kelvin is ${(temp+459.67)*(5/9)}`
    }
}
let convertTemp=convertFahrenheit(32)

console.log(convertTemp.convert)