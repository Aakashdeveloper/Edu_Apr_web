//Literal Notation
//Constructore notation
var movies = {
    name:'Avengers',
    rating:4.4
}
undefined
movies.name
"Avengers"
movies.rating
4.4
typeof(movies)
"object"
movies.language="English"
"English"
movies
{name: "Avengers", rating: 4.4, language: "English"}
movies.rating=4.5
4.5
movies
{name: "Avengers", rating: 4.5, language: "English"}
delete movies.language
true
movies
{name: "Avengers", rating: 4.5}
movies["name"]
"Avengers"
movies["rating"]=4.8
4.8
movies
{name: "Avengers", rating: 4.8}

var car = new Object();
car.color="red"
car.brand="BMW"

car
{color: "red", brand: "BMW"}


///////
var firstname = 'Jackson'
var lastname = 'Ammy'
var sayhi = {
    firstname:'John',
    lastname:'Zoe',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}

var dbquery = {
    find:(table)=>{ return `Select * from ${table}`},
    insert:(table,dbo)=>{return `Inser into ${table} name,city VALUES(${dbo.name}, ${dbo.city})`}
}

dbquery.find('Emp')
"Select * from Emp"
dbquery.insert('Emp',{name:'abc',city:'delhi'})
"Insert into Emp name,city VALUES(abc, delhi)"