let x;

// Get today's date and time
x = new Date();

//x = typeof x;

// Set to a string
x = x.toString();

//x = typeof x;

// Get a specific date
// Important - the month is 0-based, so 0 is January and 11 is December
x = new Date(2021, 6, 15, 9, 30, 10);

x = new Date('2021-06-15T09:30:10'); // yyyy-mm-ddThh:mm:ss
x = new Date('07/10/2021 09:30:10'); // mm/dd/yyyy hh:mm:ss
x = new Date('2023-05-10'); //yyyy-mm-dd
x = new Date('07-10-2022'); //mm-dd-yyyy

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestam in millisecond
x = Date.now();

// Get the timestamp of a specific date
x = new Date('07/10/2021 09:30:10');
x = x.getTime();
x = x.valueOf();

// Create a date from a timestamp
x = new Date(1625927410000);

// Convert from milliseconds to seconds
x = Math.floor(new Date() / 1000);

console.log(x);