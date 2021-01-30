let number=101.111
console.log(number.toFixed(2))
console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))

let num=function(entry){
    entry=Math.random()*10
    console.log(entry)
    if(entry<=5){
        return true
    }else{
        return false
    }
}
console.log(num(1))

