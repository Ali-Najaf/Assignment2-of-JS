// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


function addNumberClosure(num){
    return function(numberToAdd) { 
        return num + numberToAdd;
    }
} 
let number = addNumberClosure(5);
console.log(number(5));

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function searchArr(arr, value) {
    if (arr.length === 0) {
      return false;
    } else if (arr[0] === value) {
      return true;
    } else {
      return searchArray(arr.slice(1), value);
  }}
   let arr = [1, 2, 3, 4, 5];
  console.log(searchArr(arr, 2)); 
   console.log(searchArr(arr, 6)); 
  
  //  6. Write a function that saves an object to localStorage. The function should
  //  take two arguments: the first argument is a string representing the key to
  //  use for storing the object, and the second argument is the object to store.

function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  let obj = {
    name: 'Momin',
    age: 30,
    city: 'Karachi'
  };
 saveObjectToLocalStorage('myobjkey', obj);


//  7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function getObjectFromLocalStorage(key) {
    let storedObject = localStorage.getItem(key);
    return JSON.parse(storedObject);
}
let myObj = getObjectFromLocalStorage('myobjkey');
console.log(myObj);


// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object


function saveObjectToLocalStorage(obj) {
  localStorage.setItem('savedObject', JSON.stringify(obj));

  let retrievedObject = JSON.parse(localStorage.getItem('savedObject'));

  return retrievedObject;
}
let myObject = { name: "Akhter", age: 30 };
let newObject = saveObjectToLocalStorage(myObject);

console.log(newObject); 