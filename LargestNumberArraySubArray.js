function largestOfFour(arr) {
  // You can do this!
  var results = [];
  for(var n = 0;n < arr.length;n++)
  {
    var largestnumber = arr[n][0];
     for (var subarr = 1; subarr < arr[n].length;subarr++)
     {
       if (arr[n][subarr] > largestnumber)
       {
            largestnumber = arr[n][subarr];
       }
     }
    results[n] = largestnumber;
    
  }
  
  return results;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
