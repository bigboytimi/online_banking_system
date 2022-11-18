/**
let letters = "abcdefghijklmnopqrstuvwxyz"

function scoreWord(word){
    let score = 0;
    for (let i = 0; i < word.length; i++){
        score += letters.indexOf(word[i]) + 1;
    }
    return score;
}



let word = "iujbvvei  iobfoeriubrjg ubofv ;irejg ;i iubgoiuqb airu";

function highestScore(w){
    let splitted = w.split(" ");
    let index = 0;
    let highest = 0;
    for(let i = 0; i < splitted.length; i++){
        let str = scoreWord(splitted[i]);
        if (str > highest){
            highest = str;
            index++;
        }
    }
    return splitted[index];
}

console.log(highestScore(word));

//find index of number
function search(arr, n){
    if(!arr.indexOf(n)){
        return -1;
    } else{
    return arr.indexOf(n);
    }
}

console.log(search([1,2,3], 9));


//compare length of two strings
function freqCounter(str1, str2){
    let strLen1 = str1.length;
    let strLen2 = str2.length;
    
    if (strLen1 === strLen2){
        return true;
    } else {
        return false;
    }
}



console.log(freqCounter("ABC", "DE"));

//count unique values in an array
function countUnique(arr){
    return Array.from(new Set(arr)).length;
}

console.log(countUnique([1,2,2,3,3,3,4,4,5,5,6,7]));
**/
/**
//find isograms
function isogram(word){
    let obj = {};
    let newWord = word.toLowerCase();
    
    for (let i = 0; i < newWord.length; i++){
        if (obj[newWord[i]]){
            return false;
        } else {
            obj[newWord[i]] = 1;
        }
       
    }
    return true;
}
**/
//console.log(isogram("wwetr"))
/**
function anagram(str1, str2){
    let firstString = str1.split("").sort().join("");
    let secondString = str2.split("").sort().join("");
    return firstString === secondString ? true : false;
}

console.log(anagram("car", "bat"));
console.log(anagram("aaz", "zaz"));
console.log(anagram("anagram", "nagaram"));
**/
/**
function findOutlier(arr){
  const oddArray = [];
  const evenArray = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    } else {
      oddArray.push(arr[i]);
    }
  }
  
  if (oddArray.length === 1){
      return oddArray[0];
  } else {
      return evenArray[0];
  }
}

console.log(findOutlier([2,4,0,100,4,11,2602,36]))
**/
/**
//capitalize every word
function makeTitle(str){
    let splitted = str.split(" ").map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    }).join(" ");
    
    return splitted;
}

console.log(makeTitle("hello hate you stupid bitch"));

//find index
function findIndex(arr, n){
    let num = arr.indexOf(n);
    return num;
}

console.log(findIndex(["fun", "die", "hey", "why", "gone"], "gone"))

//multiply numbers in a string
let x = 1;
function multiply(str){
    let num = str.split(", ");
    for (let i = 0; i < num.length; i++){
       x *= parseInt(num[i]); 
    }
    return x;
}

console.log(multiply("1, 2, 3, 4"))
**/
/**
//check palindrome
function isPalindrome(str){
    let word = str.toString();
    let newStr = word.split("").reverse().join("");
    console.log(typeof newStr);
    console.log(newStr)
    if (str == newStr){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(12321));
**/

//return datatype of array values
function returnType(arr){
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++){
        newArr.push(typeof arr[i])
    }
    return newArr;
}

//console.log(returnType([1, "2", null, []]))

//vowel count
function vowelCount(str){
  let regx = /[aeiou]/g;
  let count = 0
  for (let i = 0; i < str.length; i++){
    if (str[i] === regx){
      count++;
    }
  }
  return count;
}

console.log(vowelCount("abracadabra"));
