var string = "The current value is ";

for (let i = 5; i <= 120; i += 10) {
	console.log(string + i);
}

for (let i = 4096; i > 1;  (i = i / 2)) {
	// var currNum = i / 2;
	var num = '';
	if (i > 1) {
		num = string + i;
	}
	console.log(num);
}

var presidents = [
"George Washington", "John Adams", "Thomas Jefferson",
"James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson",
"Martin Van Buren", "William Henry Harrison", "John Tyler", "James K. Polk",
"Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan",
"Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Rutherford B. Hayes",
"James A. Garfield", "Chester A. Arthur", "Grover Cleveland", "Benjamin Harrison",
"Grover Cleveland","William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson",
"Warren G. Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin D. Roosevelt",
"Harry S Truman", "Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson", 
"Richard M. Nixon", "Gerald R. Ford", "James Earl Carter", "Ronald Reagan", "George Bush",
"William J. Clinton", "George W. Bush", "Barack H. Obama"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9",
"10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
"22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33",
"34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44" ]

for (let i = 0; i < presidents.length; i++) {
var comment = "President #" + num[i] + " was " + presidents[i];
console.log(comment);
}


var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
	console.log("Object = " + prop + antSpecies[prop]);
}