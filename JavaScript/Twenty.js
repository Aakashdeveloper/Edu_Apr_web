function robot(name){
    this.name = name;
    this.legs = 2;
    this.color  = "white"
}


var Pepper = new robot('Pepper')
Pepper
robot {name: "Pepper", legs: 2, color: "white"}


function Human(name){
    this.name = name
    this.city = 'NewYork'
}

var John = new Human('John')
John
Human {name: "John", city: "NewYork"}

Human.prototype = new robot()
var John = new Human('John')
John.legs
2
John.color
"white"