
//Chapter 4
// Question 1
// var f_name,m_name,l_name;

// Question 2
// var camelCase,myVar,yourVar,studentName,varNo;
// var camel Case,my Var,1st,2nd,3rd; 

// Question 3(i)
// document.write("<h1>Rule for naming variable.</h1>");

// Question 3(ii)
// var $my_1stVaribale,$my_2ndVaribale,$my_3rdVaribale,$my_4thVaribale,$my_5thVaribale;

// Question 3(iii)
// var $dollar,_dollar,dollar;

// Question 3(iv)
// Variable names are case sensitive

// Question 3(v)
// Variable names should not be JS variable names

// Chapter 5
// Question 1
// var num1=3,num2=5;
// var num3=num1+num2;
// document.write("Sum of "+num1+" and "+num2+"is "+num3);

// Question 2
// var num1=3,num2=5;
// var num3=num1-num2;
// document.write("Subtraction of "+num1+" and "+num2+"is "+num3);
// var num4=num1*num2;
// document.write("Multiplication of "+num1+" and "+num2+"is "+num4);
// var num5=num1/num2;
// document.write("Division of "+num1+" and "+num2+"is "+num5);
// var num6=num1-num2;
// document.write("Modulus of "+num1+" and "+num2+"is "+num6);

// Question 3
// var firstVariable=5;
// document.write("Value after variable declaration is: ",firstVariable);
// document.write("Initial value: "+firstVariable);
// firstVariable=++firstVariable;
// document.write("Value after increment is: "+firstVariable);
// firstVariable=firstVariable+7;
// document.write("Value after addition is: "+firstVariable);
// --firstVariable;
// document.write("Value after decrement is: "+firstVariable);
// firstVariable=firstVariable%3;
// document.write("The remainder after dividing by 3 is: "+firstVariable);

// Question 4
// var movieTicket=600;
// document.write("Cost of one movie ticket is: "+movieTicket);
// document.write("Total cost of buying 5 tickets is: "+movieTicket*5);

//Question 5
// var table=5;
// document.write("<br> "+table+" x 1 = "+table*1+"<br> "+table+" x 2 = "+table*2+"<br> "+table+" x 3 = "+table*3+"<br> "+table+" x 4 = "+table*4+"<br> "+table+" x 5 = "+table*5+"<br> "+table+" x 6 = "+table*6+"<br> "+table+" x 7 = "+table*7+"<br> "+table+" x 8 = "+table*8+"<br> "+table+" x 9 = "+table*9+"<br> "+table+" x 10 = "+table*10);

//Question 6
// var celcius=5;
// document.write(""+celcius+".C"+" = "+((celcius*(9/5))+32)+".F");
// var fahrenhiet=78;
// document.write(""+fahrenhiet+".F"+" = "+((fahrenhiet-32)*(5/9))+".C");

// Question 7
// var item1=650,quantity1=3,item2=100,quantity2=7,shippingCharges=100;
// document.write("<h1>Shopping Cart</h1><br><br><br>");
// document.write("Price of item 1 = "+item1+"<br>Quantity of item 1 = "+quantity1+"<br>Price of item 2 ="+item2+"<br>Quantity of item 2 = "+quantity2+"<br>Shipping Charges = "+shippingCharges+"<br>Total Cost of your order is = "+((item1*quantity1)+(item2*quantity2)+shippingCharges));

// Question 8
// var totalMarks=500,marksObtained=450;
// document.write("<h1>Mark Sheet</h1><br><br><br>");
// document.write("Total Marks: "+totalMarks);
// document.write("Marks Obtained: "+marksObtained);
// document.write("Percentage of a Student is: "+((450/500)*100));


// Question 9
// var usDollar=10,saudiRiyal=25;
// document.write("<h1>Currency in PKR</h1><br><br>");
// document.write("Exchange Rates: <b>1 US Dollar = 280 Pakistani Rupees</b> and <b>1 Saudi Riyal = 74 Pakistan Rupees</b><br><br> Total cost in PKR ="+((10*280)+(25*74)));

//Question 10
// var number=6;
// document.write("Arithmetic Expression : "+(((number+5)*10)/2));

// Question 11
// var currYear=2024,birthYear=1973;
// document.write("<h1>Age Calculator</h1><br><br>");
// document.write("Current year = "+currYear+"<br>Birth Year = "+birthYear+"<br>Total Age ="+(currYear-birthYear));

// Question 12
// var radius=10;
// document.write("<h1>The Geometrizer</h1><br><br>");
// document.write("The Circumference of a circle is : "+(2*3.142*radius)+"<br>The Radius of a circle is: "+(3.142*(radius*radius)));

// Question 13
// var favSnack="Chocolate Chip";
// var currAge=19,maxAge=70,estiamtedAmount=5;
// document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
// document.write("favourite Snack: "+favSnack);
// document.write("<br>Current Age: "+currAge);
// document.write("<br>Max Age: "+maxAge);
// document.write("<br>Estimated amount per day: "+estiamtedAmount);
// document.write("<br>You will need "+((70-19)*(5*365))+" "+favSnack+" to last you untill the ripe old age of "+maxAge);

// Chapter 6-9
// Question 1
// var number=10;
// document.write("Result<br>")
// document.write("the value of a is: "+number);
// document.write("<br>....................................<br><br>");
// document.write("The value of ++a is: "+(++number));
// document.write("<br>The value of a is: "+number);
// document.write("<br>The value of a++ is: "+(number++));
// document.write("<br>The value of a is: "+number);
// document.write("<br>The value of --a is: "+(--number));
// document.write("<br>The value of a is: "+number);
// document.write("<br>The value of a-- is: "+(number--));
// document.write("<br>The value of a is: "+number);

// Question 2
// var a=2,b=1;
// document.write("At step --a ="+(--a));
// document.write("At step --a - --b ="+(a-(--b)));
// document.write("At step --a - --b + ++b = "+(a-b+(++b)));
// document.write("At step --a - --b + ++b + b-- = "+(a-(--b)+(++b)+(b--)));

// Question 3
// var name=prompt("Enter your name ");
// alert("Welcome "+name);

// Question 4
// var table=+prompt("Enter number for table",5);
// document.write("<br> "+table+" x 1 = "+table*1+"<br> "+table+" x 2 = "+table*2+"<br> "+table+" x 3 = "+table*3+"<br> "+table+" x 4 = "+table*4+"<br> "+table+" x 5 = "+table*5+"<br> "+table+" x 6 = "+table*6+"<br> "+table+" x 7 = "+table*7+"<br> "+table+" x 8 = "+table*8+"<br> "+table+" x 9 = "+table*9+"<br> "+table+" x 10 = "+table*10);

// Question 5
var subject1 = prompt("Enter 1st Subject");
var obtainedmarks1 = +prompt("Obtained marks in " + subject1 + " are:");
var subject2 = prompt("Enter 2nd Subject");
var obtainedmarks2 = +prompt("Obtained marks in " + subject2 + " are:");
var subject3 = prompt("Enter 3rd Subject");
var obtainedmarks3 = +prompt("Obtained marks in " + subject3 + " are:");
var totalMarks = 100;
document.write("<table><tr><th>Sunject</th><th>Total Marks</th><th>Obtained marks</th><th>Percentage</th></tr><tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedmarks1 + "</td><td>" + ((obtainedmarks1 / totalMarks) * 100) + "%</td></tr><tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedmarks2 + "</td><td>" + ((obtainedmarks2 / totalMarks) * 100) + "%</td></tr><tr><td>"+subject3+"</td><td>"+totalMarks+"</td><td>"+obtainedmarks3+"</td><td>"+((obtainedmarks3/totalMarks)*100)+"%</td></tr><tr><td>--------</td><td>--------</td><td>--------</td><td>"+((obtainedmarks1+obtainedmarks2+obtainedmarks3)/3)+"%</td></tr>");

// Secong PDF Questions cahpter 1-3

// Chapter 1
// Question 1
// var firstname="Muhammad";
// var lastname=" Hashir";
// var email="hashir1234@gmail.com";
// var phoneno="03116785452";
// var password="jhadgs122";
// alert(""+firstname+"\n"+lastname+"\n"+email+"\n"+phoneno+"\n"+password);

// Question 2
// alert("You're Learning Javascript!");

// Question 3
// alert("My name is hashir");

// Chapter 2
//Question 1
// var firstName;

// Question 2
// var lastName;
// lastName="Baig";

// Question 3
// var teamName="Portugal";
// alert("",teamName);

// Question 4
// var bestMan="Charlie";
// bestMan="Chaplin";

//Chapter 3
// // Question 1
// var caseQty;

// // Question 2
// caseQty=144;

// Question 3
// var num="9";

// Question 4
// var var1=13;
// var var2=var1+14+15;
// alert(var2);

// Question 5
// var merchTotal=100;
// var shippingCharge=10;
// var orderTotal=merchTotal+shippingCharge;
// alert(orderTotal);

// Question 6
// var first=10;
// first=first+20;
// alert(first);
