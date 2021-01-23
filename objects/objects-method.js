let resturant={
    name:'Asa',
    guestCapasity:75,
    guestCount:0,
    checkAvialability:function(partySize){
        this.guestCapasity =this.guestCapasity-partySize
        console.log(this.guestCapasity)
        return this.guestCapasity
    },
    seatParty:function(guest){
        return this.guestCount =this.guestCount + guest
    },
    removeParty:function(guest){
        return this.guestCount =this.guestCount - guest
    },

}
resturant.checkAvialability(4)
console.log(resturant.seatParty(4))
console.log(resturant.guestCount)
console.log(resturant.guestCapasity)
console.log(resturant.removeParty(4))