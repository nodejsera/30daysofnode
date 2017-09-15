//Available in current version
//This code counts the score of remo , rj and 
//default score which goes to none of them 


console.count('default');
console.count('remo');  //remo=1
console.count('remo');  //remo=2
console.count('rj');    //rj=1
console.countReset('remo'); //remo = 1
console.count('remo');  //remo=2
console.countReset('remo'); //remo=1
console.count('rj');    //rj=2
console.count();        //default=2

