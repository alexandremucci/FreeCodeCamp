var array = [1, 12, 21, 2];

// convert to string and sort
console.log(array.sort());

// comparison function to sort from the biggest to the lower
console.log(array.sort(function(a,b){
    return b - a;
}))