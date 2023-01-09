//1.
  //1a. subtract the first element value from the last element
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length-1] - ages[0]);
  //1b. push a new age and repeat 1a
ages.push(36); 
console.log(ages[ages.length-1] - ages[0]);
  //1c. loop thru array & calculate average age
var i, sum = 0;
for (i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
};
console.log(sum / ages.length);

//2. 
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
  //2a. loop thru array & calculate average length of name
sum = 0;
for (i = 0; i < names.length; i++) {
  sum = sum + names[i].length;
}
console.log(sum / names.length);
  //2b. loop thru array & concat all names with spaces
var con = names[0];
for (i = 1; i < names.length; i++) {
  con = con.concat(" ", names[i]);
}
console.log(con);

//3. how to access last element of array
//array[array.length-1]

//4. how to access first element of array
//array[0]

//5. loop thru names array for length and push to new array
var nameLengths = [];
for (i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

//6. loop thru namesLength & calculate sum
sum = 0;
for (i = 0; i < nameLengths.length; i++) {
  sum = sum + nameLengths[i];
}
console.log(sum);

//7. function to concat a word n times
function repeat(word, n) {
  var repeatedWord = '';
  for (i = 0; i < n; i++) {
    repeatedWord = repeatedWord + word;
  }
  return(repeatedWord);
}
console.log(repeat('Hello', 3));

//8. function to put together a full name
function fullName (firstName, lastName) {
  return(firstName + " " + lastName);
}
console.log(fullName("John", "Smith"));

//9. function to determine if sum of array > 100
function hundred (array) {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  if (sum > 100) {
    return true;
  }
  else {
    return false;
  }
}
console.log(hundred(nameLengths));

//10. function to average an array of numbers
function average (array) {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return(sum / array.length);
}
console.log(average(ages));

//11. function to compare averages of 2 arrays of numbers
function compareAverages (array1, array2) {
  sum = 0;
  for (i = 0; i < array1.length; i++) {
    sum = sum + array1[i];
  }
  var avg1 = (sum / array1.length);
  sum = 0;
  for (i = 0; i < array2.length; i++) {
    sum = sum + array2[i];
  }
  var avg2 = (sum / array2.length);
  if (avg1 > avg2) {
    return true;
  }
  else {
    return false;
  }
}
console.log(compareAverages(ages, nameLengths));

//12. function of a boolean and conditional
function willBuyDrink (isHotOutside, moneyInPocket) {
  if ((isHotOutside) && (moneyInPocket > 10.50)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(willBuyDrink(true, 20));

//13. self created function of conditionals returning strings (I was hungry)
function doorDash (yummyFood, distance) {
  if ((yummyFood = "pasta" || "burritos" || "burgers") && (distance < 3)) {
    return "Order DoorDash";
  }
  else {
    return "Just cook instead";
  }
}
console.log(doorDash("pasta", 2));
