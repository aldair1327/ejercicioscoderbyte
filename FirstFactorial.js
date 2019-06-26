function FirstFactorial(num) { 
  var aux = num;
  var aux2 = num; 
  
  
  for(var i = aux; i>1; i--){
      aux2 = aux2 - 1;
      num *= aux2;
  }
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
FirstFactorial(readline());