let number

let square=function(number){
    console.log(number*number)
}
square(3)

let totalBill
let tip

let tipParcent = function(totalBill = 0, tip =0) {
    return `you got total ${totalBill} and your tip is ${totalBill*tip}  and you parent is ${tip*100}%`
}
console.log(tipParcent(40,.25))