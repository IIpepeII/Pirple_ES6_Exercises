/* Variables and Constants homework FOR A MORE READABLE VERSION PLEASE OPEN
*VARIABLES_AND_CONSTANTS.md
*/


//VAR

/* The "var" keyword have used for variable declaration in old times, before ES6. The biggest *problem with using of "var" that it's not block-scoped:
 */

/*
* var i = 0
* if (true) {
*		var i = 1;
* }
* console.log(i); // console output: 1
*/

// As you can see, variable "i" was overwritten.


// LET

/* The "let" keyword was an ES6 invention.
It 's usage is more safe than "var", cause it block
scoped. */

/*
 let i = 0;
 if (true) {
   let i = 1;
    console.log(i); // console output: 1
 }
 console.log(i); // console output: 0
*/

/* You could noticed that the value of the two "i" variables
*remained within the scope in every case.
* Usage of "let" can cause less mistake in your code, so
*this is the preferred keyword nowadays.
*/

//CONST

/* The "const" keyword is for declaring constants.
* It restricts over - writing but allows mutation.
*/

/* It restricts over-writing:
const i = 0;
i = 1; // TypeError: Assignment to constant variable.
*/

/*Mutation allowed:
const obj = {};
obj.i = 1;
console.log(obj); // { i: 1 }
*/


//Hoisting

/* Variables declared using "var" keyword are always
* hoisted to the top of their scope and initialized to
* undefined.
*/

/*
* console.log(j); // ReferenceError: j is not defined
* console.log(i); // undefined
* var i = 0;
*/

/* The interpreter “hoisted” the variable declaration
* to the top of the scope:
*/

/*
* var i;
* console.log(i);
* i = 0;
*/

/* The two new keyword "let" and "const" are
* technically hoisted, but they are not initialized
* to anything.
*/

/*
* console.log(a); // Uncaught ReferenceError: b is not defined
* console.log(b); // Uncaught ReferenceError: c is not defined
* let a = 1;
* const b = 2;
*/

/* This protects against variable declarations placed after
* references to variables. So, "var" keywords unique behaviour
* is another reason to use "let" or "const" instead for a more
* readable, more maintainable code.
*/