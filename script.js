let rainy = 1;
let sunny = -1;
let overcast = 0;
const weather = (weather) => {
if(weather === 1){
    console.log(`the weather is ${weather}, bring your umbrella`)
}else if(weather === -1){
    console.log(`the weather is ${weather}, bring your sunglasses`)
}else{
     console.log(`the weather is ${weather}, stay indoors`)
}
}