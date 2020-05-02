map 
filter

var city = ["Delhi","London","Newyork"]
city.map((data) => {console.log(data)})


var a = [4,6,7,8,9]
a.map((edu) => {return edu*2})
 [8, 12, 14, 16, 18]


var a =[23,45,34,52,25,12,39]
a.filter((data) => {return data>30})


filter return those value for which condition is true
var a =[23,45,34,52,25,12,39]
a.filter((data) => {return data>30})
(4) [45, 34, 52, 39]
a.map((data) => {return data>30})
(7) [false, true, true, true, false, false, true]

var a = [0,1,2,3]
a.map((data) => {return data*2})
(4) [0, 2, 4, 6]
a.filter((data) => {return data*2})
(3) [1, 2, 3]