function myFunction(a, b){
  let llaves = Object.keys(a);
  let flag = null;

  for(let i=0; i<llaves.length; i++){
  var llave = llaves[i];

  if(llaves[i] == b && a[llave]!=undefined){
      flag = true;
      i = llaves.length;
      
   }else{
      flag = false;
   }
  }
return flag;
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
console.log(myFunction({ x: "a", y: "b", z: undefined }, "z"));
