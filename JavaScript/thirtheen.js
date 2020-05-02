var we can redeclare and reassign
let we cannot redeclare but can reassign
const  we cannot redeclare nor reassign




var a = 10
var b = 20

var a;  
var b;   ////declaration
a = 10   ///assignment
b = 20

var a = 10
undefined
> a
10
> var a = 20
undefined
> a
20
> a = 30
30
> a
30

> let b = 10
undefined
> b
10
> let b = 20
Thrown:
SyntaxError: Identifier 'b' has already been declared
> b = 20
20
> 

> const x =10
undefined
> const x =11
Thrown:
SyntaxError: Identifier 'x' has already been declared
> x = 11
Thrown:
TypeErr