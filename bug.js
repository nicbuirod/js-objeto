function incrementItems(arr) {
  let array = arr;
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }

  return array;
}

console.log(incrementItems([0, 1, 2, 3]));
