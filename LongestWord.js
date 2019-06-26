function LongestWord(sen) { 
  
  var palabras = sen.split(' ');
  
  sen = 0;
  
  for(var i = 0; i < palabras.length; i++){
    
    if(palabras[i].length > sen){
	sen = palabras[i];
    
     }
  }
  
  // code goes here  
  return sen; 
         
}
   
// keep this function call here 
LongestWord(readline());