var buff = Buffer.from('Nodejsera');
var newbuff = Buffer.alloc(20);
buff.copy(newbuff);
console.log("Content of newbuff :  " + newbuff.toString());