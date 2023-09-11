//1. (a) anonymous function , odd numbers in an array 

// let funs=function (arr){
//     for (var i=0; i<arr.length; i++){
//         if(arr[i]%2!==0)
//         console.log(arr[i]);
//     }
// }
// ([1,2,3,4,5,6,7,8,9])


//  (a) IIFE function , odd numbers in an array 

// (function(num){
//   for (let i=0; i<num.length; i++){
//     if(num[i]%2!==0)
//     console.log(num[i]);
//   }
// })([11,12,13,14,15,16,17,18,19]);



// (b) Convert all the strings to title caps in a string array 
//      (anaoymous function)

// const array = function(arr){
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//       console.log(arr);
//     }
//     }(["india","is","our","country"])


//  (b)  IIFE function
    
//     (function(str){
//     for (let i=0; i<str.length; i++){
//         str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
//         console.log(str);
//     }
//     })(["india","is","our","country"])


// (c) Sum of all numbers in an array
// anaoymous function

  //     var sum = function(arr) {
	// 	     let sum = 0; 

	// 	      for (let i = 0; i < arr.length; i++)
	// 		     sum += arr[i];
  //           return sum;
	// }
	// let arr = [12, 3, 4, 15];
	// console.log(sum(arr));


// (c) IIFE function 

// var add = function(num) { 
//   let sum = 0;
  
//   for (let i=0; i < num.length; i++)
//   sum += num[i];
// return sum;
// }
// var num = [1,2,3,4,5];
// console.log(add(num));


// (d) Return all the prime numbers in an array
// anaoymous function


