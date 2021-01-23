let myAccount={
    name:'Naimul Islam Nobel',
    expenses:0,
    income:0
}

let addExpence = function(account,amount){
    account.expenses = account.expenses + amount
    console.log(account)
}
//let expense = addExpence(myAccount,2.5)

let addIncome= function(account,income){
    account.income=account.income+income
    console.log(`My Income is ${account.income}.`)
}
let resetAccount=function(account){
    account.income=0
    account.expenses=0
    console.log(`My Income is ${account.income}. My expenses is ${account.expenses}`)
}
let myAccountSummary= function(account){
    console.log(`My name is ${account.name}. My income is ${account.income} and expense is ${account.expenses} `)
}
addIncome(myAccount,100)
resetAccount(myAccount)
myAccountSummary(myAccount)
