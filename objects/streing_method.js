//lenght poperty
// let name = 'Naimul Islam Nobel '
// console.log(name.length)

//convert to upperCase
//console.log(name.toUpperCase())
//convert to lowerCase
//console.log(name.toLowerCase())
//include method
//let password='abc'
//console.log(password.includes('abc'))
// trim
//console.log(name.trim())
//chalange area
let isValidPassword=function(password=""){
    if (password.length>=7 &&password.includes('password')){
        return`Thank You`
    }else{
        return`must be atleat 8 charecter long`
    }
}
console.log(isValidPassword('yoyo'))
console.log(isValidPassword('yoyoyoyo'))