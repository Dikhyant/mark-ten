const billEntryPanel = document.querySelector("#bill-amount");
const customerPayPanel = document.querySelector("#customer-pay");

const billEntryBtn = document.querySelector("#btn-bill");
const customerPayBtn = document.querySelector("#btn-customer-pay");

const cashFrequencyBoxes = document.querySelectorAll(".freq");
console.log(cashFrequencyBoxes);

const alternateMessage = document.querySelector("#message-for-low-cash-customer");
alternateMessage.style.visibility = "hidden"

var billAmount=0 ; 
var customerPayAmount = 0; //amount paid by customer

var cashCounter = {
    2000 : 0,
    500 : 0,
    200 : 0,
    100 : 0,
    50 : 0,
    20 : 0,
    10 : 0,
    5 : 0,
    1 : 0
}

//adding event listener to panels
billEntryPanel.addEventListener( "input" , (event)=>{
    //console.log(event.target.value)
    billAmount = parseInt(event.target.value) ;
})

customerPayPanel.addEventListener( "input" , (event)=>{
    //console.log(event.target.value)
    customerPayAmount = parseInt(event.target.value);
})



//adding event listener to buttons

billEntryBtn.addEventListener( "click" , (event)=>{
    console.log(billAmount);
} );


customerPayBtn.addEventListener( "click" , (event)=>{
    console.log(customerPayAmount);
    

    if( billAmount <= customerPayAmount) {
        //we'll continue only if customer has enough money
        alternateMessage.style.visibility = "hidden";

        var remainingMoney = parseInt(customerPayAmount - billAmount);
        

        Object.keys(cashCounter).reverse().forEach( (key)=>{
            if(key <= remainingMoney){
                cashCounter[key] = parseInt(remainingMoney / key);
                console.log("remaining money = " + remainingMoney + " cash = " + key);
                remainingMoney %= key;
                
            }
        } )

        var i = 0;
        Object.keys(cashCounter).reverse().forEach( (key)=>{
            cashFrequencyBoxes[i++].innerHTML = cashCounter[key];
        } )

    } else {
        alternateMessage.style.visibility = "visible"
    }

    console.log(cashCounter);

} );