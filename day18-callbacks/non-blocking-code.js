var fs = require('fs');


//For calculating execution time
var date1 = new Date();
var time_start = date1.getTime();
console.log("starting at: " + time_start);
console.log("Let's start reading file");


//Name of the file to be read
var filename = 'output.txt'; 
//Reading file asynchronously
fs.readFile('output.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content :  " + data);
});


//For calculating execution time
var date2 = new Date();
var time_end = date2.getTime();
console.log("finishing at: " + time_end);
var execution_time = time_end - time_start;
console.log("Time for execution: " + execution_time );
//Consider it some another task in queue
console.log('Another task to be executed');