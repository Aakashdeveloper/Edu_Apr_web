//Regex

^([a-z])$

var output = "a"

output.match("^([a-z]+)$")

var output = "a"

output.match("^([a-z]+)$")
(2) ["a", "a", index: 0, input: "a", groups: undefined]
var output = "avdfbfdff"

output.match("^([a-z]+)$")
(2) ["avdfbfdff", "avdfbfdff", index: 0, input: "avdfbfdff", groups: undefined]
var output = "avdfbfdffF"

output.match("^([a-z]+)$")
null
var output = "avdfbfdffF1"

output.match("^([a-z]+)$")

/////
var output = "avFFF"
output.match("^([a-zA-Z]+)$")

var output = "avFFF"
output.match("^([a-zA-Z0-9@.-=]+)$")

var output = "avFFF"
output.match("^([a-zA-Z]+)$")
(2) ["avFFF", "avFFF", index: 0, input: "avFFF", groups: undefined]
var output = "avFFF"
output.match("^([a-zA-Z0-9]+)$")
(2) ["avFFF", "avFFF", index: 0, input: "avFFF", groups: undefined]
var output = "avFFF22"
output.match("^([a-zA-Z0-9]+)$")
(2) ["avFFF22", "avFFF22", index: 0, input: "avFFF22", groups: undefined]



var number = "8887"
number.match("^[0-9]{10,20}$")

var email = "a@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")

var email = "a@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "a@.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")