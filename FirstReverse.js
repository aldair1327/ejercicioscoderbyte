function FirstReverse(str) { 
  
  var splitstr = str.split('');
  
  str = "";
  
    for(var i = splitstr.length-1; i >= 0; i--){
    
    str += splitstr[i];
    
     
  }
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
FirstReverse(readline());