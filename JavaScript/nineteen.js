function Language(name,country){
    this.name = name;
    this.country = country
}

var Hindi = new Language('Hindi','India')
Hindi
Language {name: "Hindi", country: "India"}



///////////////
class geo{
    constructor(lat,long){
        this.lat = lat
        this.long = long
    }
}

class Language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country = country
    }
}

var English = new Language1('English','USA',10.33,22.78)
English
Language1 {name: "English", country: "USA"}