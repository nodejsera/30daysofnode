var buff1 = Buffer.from('Nodejsera for nodejs');
var buff2 = Buffer.from('- 30 days of node');
var buff3 = Buffer.concat([buff1,buff2]);
console.log("buff3 content: " + buff3.toString());