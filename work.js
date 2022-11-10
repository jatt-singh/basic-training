/* Problem 1: Complete the secondLargest function which takes in an array of numbers 
             in input and return the second biggest number in the array. (without using sort)?
*/

function secondLargest(array) {
    // Write your code here
    let first = -1;
    let second = -1;
    for(let i = 0; i < array.length-1; i++){
       if(array[i] > first){
          second = first;
          first = array[i];
       }else if(array[i] > second && array[i] != first){
          second = array[i];
       }
    }
    return second;
}
 

/* Problem 2: Complete the calculateFrequency function that takes lowercase string as input 
              and returns frequency of all english alphabet. (using only array, no in-built function)
*/
  
function calculateFrequency(string) {
    // Write your code here

    let strg = string.replace(/\s+/g, '');
    let str = strg.replace(/[^a-z]/gi,'');
    let freq = {};
    for(let i = 0; i < str.length; i++){
      let character = str.charAt(i);
      let count = freq[character];
      freq[character] = count ? count+1 : 1;
    }   
    return freq;    
}
  

/* Problem 3: Complete the flatten function that takes a JS Object, 
              returns a JS Object in flatten format (compressed)
*/
  
function flatten(obj) {
    // Write your code here
    let result = {};
    for(let i in obj){
      if((typeof obj[i]) === "object"){
        let temp = flatten(obj[i])
          for(let j in temp){
            result[i + "." + j] = temp[j];
          }
      }else{
        result[i] = obj[i];
      }
    }
    return result;
 }
  
/* Problem 4: Complete the unflatten function that takes a JS Object, 
              returns a JS Object in unflatten format
*/
  
function unflatten(flatObject) {
    // Write your code here
  
  let result = {};
  for( let i in obj){
    let val = i.split('.');
    val.reduce(function(pv, cv, ci){
        return pv[cv] || (pv[cv] = isNaN(Number(val[ci + 1])) ? (val.length - 1 == ci ? obj[i] : {}) : [])
    },result)
  }
 
  return result;
 
} 