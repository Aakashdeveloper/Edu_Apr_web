Date()
"Sat Apr 25 2020 04:18:13 GMT+0100 (British Summer Time)"
new Date().getDay()
6
new Date().getDate()
25
new Date().getYear()
120
new Date().getFullYear()
2020


var name= "zoe"

switch(name){
    case 'aakash':
        console.log("You are user")
        break;
    case 'zoe':
        console.log("You are Admin")
        break;
    case 'Ammy':
         console.log("You are Super Admin")
         break;
    default:
        console.log("I Don't know")
        
}


switch(new Date().getDay()){
    case 1:
        console.log("Its Monday")
        break;
    case 2:
        console.log("Its Tuesday")
        break;
    case 6:
        console.log("Its Saturday")
        break;
    default:
        console.log("Wrong input")
}