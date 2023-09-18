// (A) arrow function

let funs = (arr) => {
        for (var i=0; i<arr.length; i++){
            if(arr[i]%2!==0)
            console.log(arr[i]);
        }
    }
    ([1,2,3,4,5,6,7,8,9])


// (b) Convert all the strings to title caps in a string array
    
         const array = (arr) => {
            for (let i=0; i < arr.length; i++) {
              arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
              console.log(arr);
              }
            }
            arr("india is our country")


//    (c) Sum of all numbers in an array

var add = (num) => { 
    let sum = 0;
    
    for (let i=0; i < num.length; i++)
    sum += num[i];
  return sum;
  }
  var num = [1,2,3,4,5];
  console.log(add(num));




