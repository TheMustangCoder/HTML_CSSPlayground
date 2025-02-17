

function totalMoney(money){
 let eachPerson = Math.random(10,100);
 finalTotal = money/eachPerson;  
 console.log("There are " +eachPerson);   
 if(finalTotal < money){
     
    console.log("You have really less money" +finalTotal);
    }
else if(finalTotal > money){
    console.log("You have money left " +finalTotal);

}else{
    console.log("You have 0 money left" +finalTotal);

}
}





totalMoney(100);