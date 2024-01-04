# 0x00. ES6 Basics
**`Javscript`** **`ES6`**

![meme](./images/meme1.png)

## Resources
**Read or watch:**

- [ECMAScript 6 - ECMAScript 2015](https://intranet.alxswe.com/rltoken/NW1dFLFExQ12_hD8yvkV3A)
- [Statements and declarations](https://intranet.alxswe.com/rltoken/sroRUsUvOZV28V99MHDenw)
- [Arrow functions](https://intranet.alxswe.com/rltoken/N2WLylppCtkkX3YFFtyUHw)
- [Default parameters](https://intranet.alxswe.com/rltoken/kbw9gMO6sdeOKAY23SYVgA)
- [Rest parameter](https://intranet.alxswe.com/rltoken/erZfCvacuGVk9z1CQlJvYQ)
- [Javascript ES6 — Iterables and Iterators](https://intranet.alxswe.com/rltoken/erZfCvacuGVk9z1CQlJvYQ)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops


## Tasks

### 0. Const or let?

Modify:

- function `taskFirst` to instantiate variables using `const`
- function `taskNext` to instantiate variables using `let`


### 1. Block Scope

Given what you’ve read about `var` and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.


### 2. Arrow functions

Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)


### 3. Parameter defaults

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

_Hint_: The key here to define default parameter values for the function parameters.


### 4. Rest parameter syntax for functions

Modify the following function to return the number of arguments passed to it using the rest parameter syntax


### 5. The wonders of spread syntax

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.


### 6. Take advantage of template literals

Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.


### 7. Object property value shorthand syntax

Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.


### 8. No need to create empty objects before adding in properties

Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object


### 9. ES6 method properties

Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object


### 10. For...of Loops

Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that var is not ES6-friendly.


### 11. Iterator

Write a function named `createEmployeesObject` that will receive two arguments:


### 12. Let's create a report object

Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.


### 13. Iterating through report objects

Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

This function will return an iterator to go through every employee in every department.


### 14. Iterate through object

Finally, write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from createIteratorObject.
