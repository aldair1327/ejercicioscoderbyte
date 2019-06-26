function SimpleSymbols(str) { 

 
 if(str.charAt(0)=="+"){
     
     if(str.charAt(str.length-1)=="+"){
         return true;
     }
     
     return false;
 }
 
 return false
  // code goes here  
  
         
}
   
// keep this function call here 
SimpleSymbols(readline());