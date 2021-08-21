const button1 = document.getElementById("button-8GB");
const button2 = document.getElementById("button-16GB");
const memoryCost = document.getElementById("memoryCost");

const button3 = document.getElementById("button-256GB");
const button4 = document.getElementById("button-512GB");
const button5 = document.getElementById("button-1TB");
const storageCost = document.getElementById("storageCost");

const button6 = document.getElementById("deliveryFree");
const button7 = document.getElementById("deliveryCharge");
const deliveryCost = document.getElementById("deliveryCost");



const total = document.getElementById("total");

const apply = document.getElementById("apply");

const updateTotal = document.getElementById("updateTotal")




// Changing Memory cost 
button1.addEventListener("click", function(){
    memoryCost.innerText = "0";
    totalPrice();

});
button2.addEventListener("click", function(){
    memoryCost.innerText = "180";
    totalPrice();
});


// Changing Storage Cost
button3.addEventListener("click", function(){
    storageCost.innerText = "0";
    totalPrice();
});
button4.addEventListener("click", function(){
    storageCost.innerText = "100";
    totalPrice();
});
button5.addEventListener("click", function(){
    storageCost.innerText = "180";
    totalPrice();
});

// Changing Delivery Cost
button6.addEventListener("click", function(){
    deliveryCost.innerText = "0";
    totalPrice();
});
button7.addEventListener("click", function(){
    deliveryCost.innerText = "20";
    totalPrice();
});

// Total Price
function totalPrice(){
    const bestPrice1 = document.getElementById('bestPrice');
    const price = bestPrice1.innerText;
    const bestprice = Number(price);
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const deliveryPrice = Number(deliveryCost.innerText);
    const Total = bestprice + memoryPrice + storagePrice + deliveryPrice;
    total.innerText = Total;
    updateTotal.innerText = Total;
}



// pomo code offer
apply.addEventListener("click", function(){
    const inputPomoCode = document.getElementById('pomoCode');
    const newAmountTotal = inputPomoCode.value;
    const newAmount = Number(newAmountTotal);
    inputPomoCode.value = '';


    const updatePrice = updateTotal.innerText;
    const updateAmount = Number(updatePrice);
    const newTotal = updateAmount - newAmount;
    updateTotal.innerText = newTotal;
});








// document.getElementById('deposit-button').addEventListener('click', function () {
//     // get the amount deposited
//     const depositInput = document.getElementById('deposit-input');
//     const newDepositAmountText = depositInput.value;
//     const newDepositAmount = parseFloat(newDepositAmountText);

//     // update deposit total
//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText);
//     const newDepositTotal = previousDepositAmount + newDepositAmount;

//     depositTotal.innerText = newDepositTotal;
// });

