function sentence(text){
    let  len = text.length ; 
    let pattern = 'aeiou';
    let vow = 0 ;
    let cara = 0 ;
    let wor = 0;
    for (i =0 ;i<len ;i++){
      if (pattern.includes(text[i])){vow++;}else if((text[i] !== '.') && (text[i] !== ' ')){cara++;}else {wor++}
    }
   return console.log('length of text = ',len,'number of vowels = ',vow, 'number of caracters = ',cara,'number of words',wor);
  }
