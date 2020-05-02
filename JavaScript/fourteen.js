/*var a = 10

function add(a){
    var b = 20
    a = "hii"
    console.log("b>>>>>",b)
    return a+b
}

console.log(add())
console.log("a>>>>>",a)*/

//Global
//local
/*
var a = 10
for(let i=0;i<a;i++){
    var b = 20
    //console.log(a+b+i)
}

console.log("a>>>>",a)
console.log("b>>>>",b)
console.log("i>>>>",i)
*/

var myvar = []

for(let i=0;i<3;i++){
    myvar[i] = function(){
        console.log("I am function "+i)
    }
}

for(j=0;j<3;j++){

    myvar[j]()
}

0
1
2
3