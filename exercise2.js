function tryRemoteFromArray(arr, Y) {
  if (Y > 0 && Y < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      arr[Y] = arr[Y+1];
    }
    arr.pop();
    console.log(arr);
  } else if (Y === 0) {
    arr.shift();
    console.log(arr);
  } else {
    console.log(arr);
  }
}
tryRemoteFromArray([12,6,3,7,21,5,7], 2);
tryRemoteFromArray([12,6,3,7,21,5,7], 0);
tryRemoteFromArray([12,6,3,7,21,5,7], 7);
tryRemoteFromArray([12,6,3,7,21,5,7], - 2);