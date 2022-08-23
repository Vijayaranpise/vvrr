
//var , let , const
console.log("=========Program Start=========");

function say(message){
    
    if(message=="Hi") {
        var greetings = "Good Morning";
        let buyMessage = "See you tomorrow";
        const PI=3.145;
        console.warn("Hey. How are you ? ");
        console.log(message);
        console.log(greetings);
        console.log(buyMessage);
    }
    console.log(greetings);
    // console.log(buyMessage);
    // console.log(PI);
}
say("Hi");

// console.log(greetings);

console.log("=========Program END=========");
console.log("=================== if else if else statement================================")
var numberToCheck = 30;
console.log(`Number to check is: ${numberToCheck}`); 
if (numberToCheck < 0) {
    console.log(`Number is Negative: ${numberToCheck}`); // 2
} else if (numberToCheck % 2 == 0) {
    console.log(`Number is EVEN: ${numberToCheck}`); // 3
} else {
    console.log(`Number is ODD: ${numberToCheck}`); // 4
}
function isEvenOrOdd(number){
    if (numberToCheck % 2 == 0){
        return "EVEN";
    }
    if (numberToCheck % 2 != 0){
        return "ODD";
    }
    
}
var result = isEvenOrOdd(20);
console.log("20 is",result);

console.l("=================End of Program====================");