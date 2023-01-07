//1.
  //1a.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length-1] - ages[0]);
  //1b.
ages.push(36); 
console.log(ages[ages.length-1] - ages[0]);
  //1c.
var i, sum = 0;
for (i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
};
console.log(sum / ages.length);

//2. 
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
  //2a.
sum = 0;
for (i = 0; i < names.length; i++) {
  sum = sum + names[i].length;
}
console.log(sum / names.length);
  //2b.
var con = names[0];
for (i = 1; i < names.length; i++) {
  con = con.concat(" ", names[i]);
}
console.log(con);

//3.
//array[array.length-1]

//4.
//array[0]

//5.
var nameLengths = [];
for (i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

//6.
sum = 0;
for (i = 0; i < nameLengths.length; i++) {
  sum = sum + nameLengths[i];
}
console.log(sum);

//7.
function repeat(word, n) {
  var repeatedWord = '';
  for (i = 0; i < n; i++) {
    repeatedWord = repeatedWord + word;
  }
  return(repeatedWord);
}
console.log(repeat('Hello', 3));

//8.
function fullName (firstName, lastName) {
  return(firstName + " " + lastName);
}
console.log(fullName("John", "Smith"));

//9.
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

//10.
function average (array) {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return(sum / array.length);
}
console.log(average(ages));

//11.
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

//12.
function willBuyDrink (isHotOutside, moneyInPocket) {
  if ((isHotOutside) && (moneyInPocket > 10.50)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(willBuyDrink(true, 20));

//13.
function doorDash (yummyFood, distance) {
  if ((yummyFood = "pasta" || "burritos" || "burgers") && (distance < 3)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(doorDash("pasta", 2));

