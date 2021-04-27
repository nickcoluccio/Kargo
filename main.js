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
function convertToWords(number){
   let numInWords=[];
   let finalWord="";
    
    for(num= number; num>0; num=Math.floor(num/10)){
        numInWords.push(singleNumToWords(num%10));
       
    }

    for (word= numInWords.length-1; word>=0; --word){
        finalWord+=numInWords[word];
    }
    return finalWord;
}
const process= require('process');
let args= process.argv;
let convertedWords=[];
for (i=2; i<args.length; ++i){
 convertedWords.push(convertToWords(Number(args[i])));
}
console.log(convertedWords.join(","));


