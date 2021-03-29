function palindrome(str) {
    let filtered = str.toLowerCase().match(/[a-zA-Z0-9]/gi) || [];
    let answer = filtered.map((item,i)=> filtered[i] === filtered[filtered.length-i-1] ? 1 : 0).reduce((a,b)=>a+=b,0);
    return answer === filtered.length;
  }