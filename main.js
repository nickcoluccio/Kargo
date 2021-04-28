function singleNumToWords(number){
    switch(number){
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "NaN";
    }
}

const process= require('process');
let args= process.argv;
let convertedWords=[];

for (index = 2; index < args.length; ++index) {
    if (!isNaN(args[index])) {
        let completeNumber="";
        for (digit = 0; digit < args[index].length; ++digit) {
            completeNumber += convertToWords(Number(args[index][digit]));
        }
        convertedWords.push(completeNumber);
    } else convertedWords.push("NotANumber");
}
console.log(convertedWords.join(","));


