/*console.log(2+'2');
console.log(3-'77');
var name = 'shubham';
if(isNaN(name)){
    console.log('print valid number');
}
console.log(NaN === NaN);

var a = 4;
var b = 5;
do{
    console.log(a);
    a++;
}while(a<6);

const funcName = () => {
    console.log('shubham');
}

let sum = () =>{
    console.log('shubham');
}
sum();
let array = ['shubhan',20,true,'ashish',22,true];
console.log(array[3]);

var names = ['shubham','ashish','navneet','nishant'];
for(let elements in names){
    console.log(elements);
}

///
for(let elements of names){
    console.log(elements);
}
///foreach loop

names.forEach((elements,index)=>{
    console.log(elements , index);

})*/

//const fruits = ['apple','mango','lichi'];
/*const n = fruits.push('pineapple');
console.log(fruits);
console.log(n);


const numbers = [1,2,3,4];
numbers.unshift(9,8,7,6);
console.log(numbers);


console.log(numbers.shift());*/
/*const names = ['shubham','ashish','rahul','amandeep'];
names.splice(5,1,'navneet');
console.log(names);
const months = ['Jan','Feb','march','April'];
months.splice(2,1,"March");
console.log(months);

var myFriends = ['shubham','savarn','ritwik','ashish'];
console.log(myFriends.indexOf('savarn'));*/



/////update month
/*var month = ['jan','feb','march','april'];
var indexofmonth = month.indexOf('march');
if(indexofmonth != month){
    console.log(month.splice(indexofmonth,1,'March'));
    console.log(month);
}*/


//-----------------------------------------------------------


var months = ['Jan','Feb','March','April','May'];
var indexofmonth = months.indexOf('April');
if(indexofmonth != -1){
    months.splice(indexofmonth,1,'april');
    console.log(months);
}else{
    console.log('sorry you are wrong');
}