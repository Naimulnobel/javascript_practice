const account={
    name:"nobel",
    amount:[],
    expense:[],
    addExpense:function(description,amount){
        this.expense.push({
            description:description,
            amount:amount,
    })
    },
    addAmount:function(description,amount){
        this.amount.push({
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
        this.amount.forEach(function(amount){
            totalEarnAmount=totalEarnAmount+amount.amount

        })
        console.log(`${this.name} has $${totalExpenseAmount} in expense. Has Earned in $${totalEarnAmount} `)
    }
}
account.addExpense("rent",100)
account.addExpense("ammount",100)
account.addAmount("salery",100)
account.addAmount("ammount",100)
account.getAccountSummary()