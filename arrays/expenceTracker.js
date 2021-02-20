const account={
    name:"nobel",
    expense:[],
    addExpense:function(description,amount){
        this.expense.push({
            description:description,
            amount:amount,
    })
    },
    getAccountSummary:function(){
        let totalAmount=0
        this.expense.forEach(function(expanse){
            totalAmount=totalAmount+expanse.amount

        })
        console.log(`${this.name} has $${totalAmount} in expense `)
    }
}
account.addExpense("rent",100)
account.addExpense("ammount",100)
account.getAccountSummary()