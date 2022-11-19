function myFunction(a, b) {
  var llaves = Object.keys(a);
  let temp = 0;
  for (var i = 0; i < llaves.length; i++) {
    var llave = llaves[i];
    var contenido = a[llave];
    resultado = llave.search(b);

    if (resultado != -1 && contenido != undefined) {
      temp = temp + 1;
    } else {
      temp = temp + 0;
    }
  }

  if (temp >= 1) {
    res = true;
  } else {
    res = false;
  }

  return res;
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
console.log(myFunction({ x: "a", y: "b", z: undefined }, "z"));
