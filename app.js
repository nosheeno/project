let myArray =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let input=prompt("Enter any alphabat from A to Z ?",'');
for(var i=0;i<myArray.length;i++){
  if(input==myArray[i]){
    document.write("The index number of "+myArray[i]+  " in array is " +i+ "<br>");
  }
}
// document.write("input is invalid");
