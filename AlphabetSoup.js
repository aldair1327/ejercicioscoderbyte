function AlphabetSoup(str) { 
    
     
  // code goes here  
  var letras = str.split('');
  letras.sort();
  str = "";

  
  for(i = 0; i < letras.length ; i++){
      str+=letras[i];
  }
  
  return str ; 
         
}
   
// keep this function call here 
AlphabetSoup(readline());