//function
//method
//arrow function
//Anonyms function
//Generator
var a = 1
var b = 2
a+b

//function
function add(a,b){
    return a+b
}

add(54,76)
130
add(1,1)
2
add("k","ia")
"kia"

function isEven(numbersa){
    for(i=0;i<numbersa.length;i++){
        if(numbersa[i]%2==0){
            console.log("Number is even")
        }else{
            console.log("Number is odd")
        }
    }
}

isEven([3,4,6,2,34,4776,43,22])
VM2879:6 Number is odd
5VM2879:4 Number is even
VM2879:6 Number is odd
VM2879:4 Number is even

//method
var isEven = function(numbersa){
    for(i=0;i<numbersa.length;i++){
        if(numbersa[i]%2==0){
            console.log("Number is even")
        }else{
            console.log("Number is odd")
        }
    }
}
isEven([3,4,6,2,34,4776,43,22])

//es5
function add(a,b){
    return a+b
}

//es6
var add = (a,b) => { return a+b}