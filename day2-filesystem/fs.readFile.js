var fs=require('fs');

fs.readFile('message.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content :  " + data);
});