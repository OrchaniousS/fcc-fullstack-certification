function rot13(str) {
    let unCi = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let isCi = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('')
    return  [...str].map(item=>unCi.indexOf(item)>-1 ?isCi[unCi.indexOf(item)] : item).join('')
  }
  
  rot13("SERR PBQR PNZC");