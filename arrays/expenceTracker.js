const account={
    name:"nobel",
    ammount:[],
    expense:[],
    addExpense:function(description,amount){
        this.expense.push({
            description:description,
            amount:amount,
    })
    },
    addAmmount:function(description,amount){
        this.ammount.push({
            description:description,
            amount:amount,
    })
    },
    getAccountSummary:function(){
        let totalExpenseAmount=0
        let totalEarnAmount=0
        this.expense.forEach(function(expanse){
            totalExpenseAmount=totalExpenseAmount+expanse.amount

        })
        this.ammount.forEach(function(amount){
            totalEarnAmount=totalEarnAmount+amount.amount

        })
        console.log(`${this.name} has $${totalExpenseAmount} in expense. Has Earned in $${totalEarnAmount} `)
    }
}
account.addExpense("rent",100)
account.addExpense("ammount",100)
account.addAmmount("salery",100)
account.addAmmount("ammount",100)
account.getAccountSummary()