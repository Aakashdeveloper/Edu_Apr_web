if 
else 

var a = 10
if(a>10){
    console.log("Number is big")
}else{
    console.log("Number is small")
}

if(a%2==0){
    console.log("Number is Even")
}else{
    console.log("Number is Odd")
}

var a = 11
undefined
if(a%2==0){
    console.log("Number is Even")
}else{
    console.log("Number is Odd")
}
VM4476:4 Number is Odd


var a = 11
if(a%2==0){
    console.log("Number is Even")
}else if(a%3==0){
    console.log("Number is divisible by 3")
}
else{
    console.log("Number is Odd")
}

var a = 12
if(a%2==0){
    console.log("Number is Even")
}
if(a%3==0){
    console.log("Number is divisible by 3")
}
else{
    console.log("Number is Odd")
}
Number is Even
Number is divisible by 3



var a = 12
if(a%2==0){
    console.log("Number is Even")
}
else if(a%3==0 || a%5==0){
    if(a%3==0){
        console.log("Number is divisible by 3")
    }else{
        console.log("Number is divisible by 5")
    }
}
else{
    console.log("Number is Odd")
}

//Terneray Operator
var name = "John"

name == "John" ? "Welcome" :"Bie"
"Welcome"
var name = "Ammy"

name == "John" ? "Welcome" :"Bie"
"Bie"

var a = 10

a>10 ? a+1:a-1
9
var a = 10

a==10 ? a+1:a-1
11

///
My Luck Game
ask user to provide you one Number
you generate on number between 1 to 20
if both match user win else loose