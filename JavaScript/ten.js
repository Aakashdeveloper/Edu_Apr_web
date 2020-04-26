for     => Simple form of loop
while   => its not guarantee that it return something
            as it first check the condition and apply logic
do while => its guarantee that it will run once 
            as it check condition later
for of  => New way of for loop for array
for in  => Use for objects
Map
Filter


//For///
for(i=0;i<5;i++){
    console.log((i))
}
0
1
2
3
4

var city=["Delhi","London","Newyork","Dubai","Paris"]
for(i=0;i<city.length;i++)
{
    console.log(city[i])
}

//While//
var i =0
while(i<5){
    console.log(i)
    i++
}
0
1
2
3
4

var city=["Delhi","London","Newyork","Dubai","Paris"]
var i =0
while(i<city.length){
    console.log(city[i])
    i++
}

//Do While//
var i = 0;
do{
    console.log(i)
    i++
}
while(i<5)

0
1
2
3
4

var city=["Delhi","London","Newyork","Dubai","Paris"]
var i = 0;
do{
    console.log(city[i])
    i++
}
while(i<city.length)

/////For of/////

var city=["Delhi","London","Newyork","Dubai","Paris"]
for(citi of city){
    console.log(citi)
}

Delhi
London
Newyork
Dubai
Paris


///
My Luck Game
ask user to provide you 5 Number
you generate on 5 number between 1 to 20
keep saving the result if ratio of win
is more than loose than user win else loose