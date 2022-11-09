//DOM Selectors(Variables)
const billInput = document.getElementById('billTotalInput');
const tipPercent = document.getElementById('tipInput');
const increaseBtn = document.getElementById('increaseButton');
const decreaseBtn = document.getElementById('decreaseButton');
const totalPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');
let numPeople = Number(totalPeople.innerText)

//Functions
const calculateTotalBill = () => {
    const bill = Number(billInput.value)
    const tip = (Number(tipPercent.value)/100)*bill;
    const totalBill = bill + tip;
    const perPersonBill = totalBill/(numPeople);
    perPersonTotal.innerText = `$${perPersonBill.toFixed(2)}`;  
}
const increasePeople = () => {  
    numPeople += 1;    
    console.log(numPeople);
    totalPeople.innerText = numPeople;   
    calculateTotalBill();
}
const decreasePeople = () => {
    if(totalPeople.innerText == 1){
        alert('Invalid Number of People');
    }else{
    numPeople -= 1;
    totalPeople.innerText = numPeople;
    calculateTotalBill();
    }    
}


//Event Listeners
billInput.addEventListener('keyup', calculateTotalBill);
tipPercent.addEventListener('keyup', calculateTotalBill);
decreaseBtn.addEventListener('click', decreasePeople);
increaseBtn.addEventListener('click', increasePeople)

