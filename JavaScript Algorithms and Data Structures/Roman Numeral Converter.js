function convertToRoman(num) {
    let numToStr = num.toString();
 let firstD = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
 let secD = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
 let thirdD = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
 let forthD = 'M';
 let leng = numToStr.length;
 let answ = '';
 for(let i=0; i<leng; i++){
     if(leng===1){answ=firstD[numToStr]}
     if(leng===2){answ=secD[numToStr[0]]+firstD[numToStr[1]]}
     if(leng===3){answ=thirdD[numToStr[0]]+secD[numToStr[1]]+firstD[numToStr[2]]}
     if(leng===4){answ= forthD.repeat(numToStr[0])+thirdD[numToStr[1]]+secD[numToStr[2]]+firstD[numToStr[3]]}
 }
 return answ;
}

convertToRoman(36);
convertToRoman(2);
convertToRoman(12);
convertToRoman(16);
convertToRoman(649);
convertToRoman(1000);
convertToRoman(1006);
convertToRoman(3999);