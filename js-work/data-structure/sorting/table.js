/**
 * 
 * Basic program to print tables from 2 to 20
 */


table();



function table(){
    console.log("### PRINTING TABLES")
    for(let i = 1; i <= 20; i++){
        for(let j = 1; j <= 10; j++){
            console.log(i + " X "+ j+" = " + i*j);
        }
    }
}
