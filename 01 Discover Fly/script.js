document.getElementById('firstClass-increase-btn').addEventListener('click', function(){
    var firstClassTicketPrice = IncreaseDecreaseBtn(true, 'ticket-count-for-firstClass', 150);
    document.getElementById('every-ticket-price-firstClass').innerText = firstClassTicketPrice;
    totalCalculation();
});
document.getElementById('firstClass-decrease-btn').addEventListener('click', function(){
    var firstClassTicketPrice = IncreaseDecreaseBtn(false, 'ticket-count-for-firstClass', 150);
    document.getElementById('every-ticket-price-firstClass').innerText = firstClassTicketPrice;
    totalCalculation();
});
document.getElementById('economy-increase-btn').addEventListener('click', function(){
    var economyTicketPrice = IncreaseDecreaseBtn(true, 'ticket-count-for-economy', 100);
    document.getElementById('every-ticket-price-economy').innerText = economyTicketPrice;
    totalCalculation();
});
document.getElementById('economy-decrease-btn').addEventListener('click', function(){
    var economyTicketPrice = IncreaseDecreaseBtn(false, 'ticket-count-for-economy', 100);
    document.getElementById('every-ticket-price-economy').innerText = economyTicketPrice;
    totalCalculation();
})


function IncreaseDecreaseBtn(button,entry,price){
    const countableTicket = document.getElementById(entry);
    const countableTicketQuantity = parseInt(countableTicket.value);
    let currentTicketCount;
    if(button == true){
        currentTicketCount = countableTicketQuantity + 1;
    }
    else if(button == false){
        currentTicketCount = countableTicketQuantity - 1;
    }
    if(currentTicketCount < 0){
        currentTicketCount = 0;
    }
    document.getElementById(entry).value = currentTicketCount;
    const ticketRate = currentTicketCount * price;
    return ticketRate;
}

function totalCalculation(){
    const totalFirstClassSeat = document.getElementById('every-ticket-price-firstClass');
    const totalFirstClassTicketQuantity = parseInt(totalFirstClassSeat.innerText);
    const totalEconomySeat = document.getElementById('every-ticket-price-economy');
    const totalEconomySeatQuantity = parseInt(totalEconomySeat.innerText);

    let subTotal = totalFirstClassTicketQuantity + totalEconomySeatQuantity;
    document.getElementById('subtotal').innerText = '$'+ subTotal;
    let tax = subTotal * 10 / 100;
    document.getElementById('tax').innerText = '$' + tax;

    let total = subTotal + tax;
    document.getElementById('total').innerText = '$'+ total;
}

document.getElementById('booking-seat').addEventListener('click', function(){
    getEntry('book-seat').style.display = 'none';
    getEntry('booking-order-list').style.display = 'block';

    getValue("ticket-count-for-firstClass",'ticket-quantity-firstClass');
    getValue("ticket-count-for-economy",'ticket-quantity-economy');

    getInnerText('every-ticket-price-firstClass','firstClass-amount');
    getInnerText('every-ticket-price-economy','economy-amount');
    getInnerText('total', 'booking-total');
});

function getEntry (entry){
    var record = document.getElementById(entry);
    return record;
}
function getValue(entry1,entry2){
    var getValue = getEntry(entry1).value;
    getEntry(entry2).innerText = getValue;
}
function getInnerText(entry1,entry2){
    var innerTxt = getEntry(entry1).innerText;
    getEntry(entry2).innerText ='$'+innerTxt;
}