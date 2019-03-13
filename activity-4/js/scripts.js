//Variable declaration for the greeting
var user = 'Jay';
var salutation = 'Welcome ';
//Concantonate the greeting message into a variable
var greeting = salutation + user +'!';

//Get the element that has Id of greeting
var jsg = document.getElementById('greeting');
//Replace HTML greeting with JS greeting
jsg.textContent = greeting;


//Variable declaration for the Price
var price = 99.99;
var studentDiscount = .1;
//Calculate the student pricing
var studentPrice = price - (price * studentDiscount);

//Get the element that has id of Price
var elPrice = document.getElementById('price');
//Get the element that has id of Student Price
var elStudentPrice = document.getElementById('student-price');

//Replace HTML price with JS price
elPrice.textContent = 'Price: $' + price;
//Replace HTML student price with JS student price
elStudentPrice.textContent = 'Student Price: $' + studentPrice.toFixed(2);
