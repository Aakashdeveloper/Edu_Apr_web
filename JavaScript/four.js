//String operations
var city = "london"
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"


var city = "lONdoN"
"London"

var city = "lONdoN"
undefined
city.length
6
city[0].toUpperCase()
"L"
city[1].toLowerCase()
"o"
city[1]
"O"
var city =" lONdon.  "
undefined
city.length
10
city.trim()
"lONdon."
var city =" lONdon .  "
undefined
city.trim()
"lONdon ."

var  city = "amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(10)
""
city.slice(2,4)
"st"
city.slice(2,5)
"ste"

var city = "amSteRDam"
city.charAt(0).toUpperCase()

var city = "amSteRDam"
city.slice(1).toLowerCase()

var city = "amSteRDam"
city.charAt(0).toUpperCase()
"A"
var city = "amSteRDam"
city.slice(1).toLowerCase()

"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

slice
substring
substr

var city = "Helsinki"
city.slice(1)
"elsinki"
city.substring(1)
"elsinki"
city.substr(1)
"elsinki"

var city = "Helsinki"
undefined
city.slice(2,4)   slice(start,end)
"ls"
city.substring(2,4)  substring(start,end)
"ls"
city.substr(2,4)     substr(start,length)
"lsin"


var city = "Helsinki"
undefined
city.slice(2,-2)
"lsin"
city.slice(-2,-2)
""
city.slice(-2,2)
""
city.slice(2,-3)
"lsi"


var city = "Helsinki"
undefined
city.substring(2,-2)
"He"
city.substring(-1,2)
"He"
city.substring(-1,-2)
""

var city = "Helsinki"
undefined
city.substr(2,-2)
""
city.substr(-2,2)
"ki"
city.substr(-4,3)
"ink"

var city = "Helsinki"
undefined
city.substring(2)
"lsinki"

var city = "Helsinki"
undefined
city.substring(2)
"lsinki"
city.substring(-2)
"Helsinki"

var a ="i am doing javaSscript     "

var a ="i am doing javaSscript     "
undefined
a.trim().toUpperCase()
"I AM DOING JAVASSCRIPT"
var a ="i am doing javaSscript     "
undefined
a.replace('javaSscript','JS')
"i am doing JS     "
a.replace('javaSscript','JS').trim()
"i am doing JS"


var a ="i am doing JavaScript"
undefined
a.replace('a','A')
"i Am doing JavaScript"
a.replace(/a/g,'A')
"i Am doing JAvAScript"
a.replace(/ /g,'_')
"i_am_doing_JavaScript"