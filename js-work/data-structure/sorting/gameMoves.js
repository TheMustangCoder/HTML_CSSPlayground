console.log("You are in a forest, you have 3 choices");
console.log("Bridge: 1");
console.log("Dark Village: 2");
console.log("Climb the moutain to rich town: 3");



gameMoves(3);



function gameMoves(moveChoice){
let money = 0; 
let health = 5;
let strength = 5;   

console.log("### Passed moveChoice is ::"+moveChoice)

if (moveChoice == 1){
    console.log("Uh oh, wrong choice, you fell and died and ran out of strength and you didn't make any money overall.");
    health = 0;
    strength = 0;
    
    
    console.log("Stats:");
    console.log("Money: "+money+" Gold");
    console.log("Strength: "+strength);
    console.log("Health" + health);

}
if(moveChoice == 2){
    console.log("This was a intresting choice, wait 20 seconds for the result.")
    for(let i = 20; i >= 0; i--){
        console.log(i);
    }
    health = health + 5;
    strength = strength + 5;
    money = money + 200;

    
    console.log("Congrats! this was a good choice, a healer helped you gain your strength and gave you a longer life. With a bonus of : " +money+" Gold!!!! Now you are free to enjoy your earnings.")

    console.log("Stats:");
    console.log("Money: "+money+" Gold");
    console.log("Strength: "+strength);
    console.log("Health" + health);
}
if(moveChoice == 3){
    console.log("Oooooo, Sorry wrong choice you lost your strength and died");

    strength = 0;
    health = 0;

    console.log("Stats:");
    console.log("Money: "+money+" Gold");
    console.log("Strength: "+strength);
    console.log("Health" + health);

}
}