var a = ["a","b","c"]
var b = [1,4,7,9,4]
var c = [true, false,false,true,false]

var d = [3,54,"sd","fr",true,34,"dsv","f","ev",true]

var city=["Delhi","London","Newyork","Dubai","Paris"]
undefined
typeof(city)
"object"
city.length
5
city[0]
"Delhi"
city[2]
"Newyork"
city.length-1
4
city[city.length-1]
"Paris"

/*
Push => always insert at the end of the array
Pop => always take out last valurefrom the array
Shift => remove alaways first value from the array
unshift => add always at the begining of thr array
slice=> help to take out the value in given range
splice => help to add at any index of array and remove
           from any index of array
*/


var city=["Delhi","London","Newyork","Dubai","Paris"]
city.push("Amsterdam")
6
city
(6) ["Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam"]
city.push("Helsinki")
7
city
(7) ["Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]

var city =  ["Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
undefined
city.pop()
"Helsinki"
a


var city =  ["Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.pop(1)
"Helsinki"
city.pop(54436436)
"Amsterdam"
city.pop(5)
"Paris"
city
(4) ["Delhi", "London", "Newyork", "Dubai"]

var city =  ["Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
undefined
city.unshift('Nice')
8
city
(8) ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.shift()
"Nice"

var city = ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
undefined
city.slice(2)
(6) ["London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.slice(-2)
(2) ["Amsterdam", "Helsinki"]
city.slice(-2,4)
[]
city.slice(2,-4)
(2) ["London", "Newyork"]
city
(8) ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.slice(2,5)
(3) ["London", "Newyork", "Dubai"]
city
(8) ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
var city = ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]

undefined
city.splice(3,0,'Innsburg')
[]
city
(9) ["Nice", "Delhi", "London", "Innsburg", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.splice(3,2)
(2) ["Innsburg", "Newyork"]
city
(7) ["Nice", "Delhi", "London", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.splice(4,1,'Mumbai','Pune')
["Paris"]
city
(8) ["Nice", "Delhi", "London", "Dubai", "Mumbai", "Pune", "Amsterdam", "Helsinki"]


var city = ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]


undefined
city.indexOf('Pune')
-1
city.indexOf('Mumbai')
-1
city.indexOf('Delhi')
1
city.indexOf('Paris')
5


var a = ['a','b','c']
undefined
var b = [2,3,5,6]
undefined
a+b
"a,b,c2,3,5,6"
a.concat(b)
(7) ["a", "b", "c", 2, 3, 5, 6]
b.concat(a)
(7) [2, 3, 5, 6, "a", "b", "c"]
var c = ["hi",'bie']
undefined
a.concat(b,c)
(9) ["a", "b", "c", 2, 3, 5, 6, "hi", "bie"]
c.concat(a,b)
(9) ["hi", "bie", "a", "b", "c", 2, 3, 5, 6]

var test = "a,b,c2,3,5,6"
undefined
test.split(',')
(6) ["a", "b", "c2", "3", "5", "6"]
var a = "JavaScript"
undefined
a.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


var a = ["a","b",["aa","bb","cc",[1,2,4,6,],"dd",["hi",["bie"]]],"c","d"]

a[2][3][0]
a[2][5][1][0]


//Es7
var a = ["a","b",["aa","bb","cc",[1,2,4,6,],"dd",["hi",["bie"]]],"c","d"]
a.flat()
var a = ["a","b",["aa","bb","cc",[1,2,4,6,],"dd",["hi",["bie"]]],"c","d"]
a.flat()
(10) ["a", "b", "aa", "bb", "cc", Array(4), "dd", Array(2), "c", "d"]
var a = ["a","b",["aa","bb","cc",[1,2,4,6,],"dd",["hi",["bie"]]],"c","d"]
a.flat(2)
(14) ["a", "b", "aa", "bb", "cc", 1, 2, 4, 6, "dd", "hi", Array(1), "c", "d"]
a.flat(Infinity)
(14) ["a", "b", "aa", "bb", "cc", 1, 2, 4, 6, "dd", "hi", "bie", "c", "d"]



//Es5
var city = ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.sort()

var city = ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.sort()

var city = ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.sort()
(8) ["Amsterdam", "Delhi", "Dubai", "Helsinki", "London", "Newyork", "Nice", "Paris"]
var city = ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city
(8) ["Nice", "Delhi", "London", "Newyork", "Dubai", "Paris", "Amsterdam", "Helsinki"]
city.sort().reverse()
(8) ["Paris", "Nice", "Newyork", "London", "Helsinki", "Dubai", "Delhi", "Amsterdam"]

var city = ["Paris", "Nice", "Newyork", "London", "Helsinki", "Dubai", "Delhi", "Amsterdam"]
undefined
city.includes('Delhi')
true
city.includes('Mumbai')
false