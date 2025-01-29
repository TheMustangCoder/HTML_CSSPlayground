let numList = [824, 290, 87, 4, 95, -48, 579, 36, 370, -513, -597, -137, -891, -80, -573, -982, -541, -145, -373, -783, 
    -143, 19, 199, -868, -258, 35, -757, -154, -455, 491, 31, -570, -643, -298, -959, -361, -543, -592, -974, 942, 
    833, -388, 747, -255, -381, -849, -374, 123, -921, -211, -787, 482, 707, 238, 517, 98, 213, -375, 764, -660, 
    357, -301, 499, 622, -413, -916, 518, -927, -872, -253, 91, -676, 239, -458, -527, 264, -213, -237, -39, -986, 
    -819, 751, 564, 370, -560, 231, -930, 684, 134, 579, 708, 780, 263, -454, -947, -895, 650, 540, -893, -416];   

    let numCompare = 10;


    let finalList = [];
console.log(numSorter(numCompare,numList));

//compare takes the number to compare the values with
//list is used to check between the list

function numSorter(compare,list){

    console.log(list.length)
    for(let i = 0; i < list.length; i++){
        if(compare >= list[i]){
            finalList.push(list[i]);
        }
    }
    return finalList;
}















































