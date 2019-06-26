function LetterCapitalize(str) { 

  
  var palabras = str.split(' ');
  var aux = "";
  str = "";
  
    for(var i = 0; i < palabras.length; i++){
    
    aux = palabras[i].charAt(0,1).toUpperCase();
    aux += palabras[i].substring(1,palabras[i].length);
	str += aux+" ";
    
     }
  
  // code goes here  
  return str; 
         

   
// keep this function call here 
LetterCapitalize(readline());                            

}