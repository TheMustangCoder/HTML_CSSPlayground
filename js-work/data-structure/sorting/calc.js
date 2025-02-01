console.log("Testing")


function calculator(sign,num1,num2){
let finalans;
if(sign === "multiply"){
finalans = num1*num2;
console.log(finalans);
}
if(sign === "add"){
    finalans = num1+num2;
    console.log(finalans);
    }

 if(sign === "sub"){
        finalans = num1-num2;
        console.log(finalans);
        }
if(sign === "divide"){
finalans = num1/num2;
console.log(finalans);
}
}



calculator("sub", 2, 3);
calculator("add", 2, 3);
calculator("multiply", 2, 3);
