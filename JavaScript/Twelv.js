/*function sayHi(){
    return "Hi To JS"
}

console.log(sayHi())


IFFE
*/

(function(){
    console.log("Hi To JS")
}())


//Generator Function
function looping(userinput){
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}
looping(5)
0
1
2
3
4

function * looping(userinput){
    for(i=0;i<userinput;i++){
        yield i
    }
}

var data = looping(5)

data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}
data.next()
{value: undefined, done: true}