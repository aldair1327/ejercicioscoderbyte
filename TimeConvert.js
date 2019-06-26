function TimeConvert(num) { 
     
  // code goes here  
  const h = (num/60) >>0 ;
  var m = num%60;
  return h +":"+ m; 
         
}
   
// keep this function call here 
TimeConvert(readline());