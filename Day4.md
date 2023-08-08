# Day 4 🤩

## Functions

* `Values` ***are*** things.
* `Variables` ***point to*** things.
* `Functions` ***do*** things.

#### 💡**NOTE:**
> * `typeof NaN` = "number".
> * JS doesn't care too much about the passed arguments :
```javaScript
function add(x,y,z){
    return x+y+z;
}
add(1,2); //NaN
/*
cuz we didn't pass the 3rd argument >>> JS will take it as undefined value 
1+2+undefined= NaN >>> NaN is a number
*/
```
```javaScript
function getRandomNumber(){
    return Math.random();
}
getRandomNumber("sth"); //0.56259486521546513
/*
JS will ignore that we passed an argument even when it doesn't have parameters
*/
```

### Function Return Values

The default return value of JS functions is `undefined`, so if a function doesn't have a `return` the return value of it will be `undefined`.

### Arrow Functions
Since arrow functions are expressions, we can assign  them to a variable:

```javaScript
const add = (x,y) => x + y;
```
is **equivelant** to

```javaScript
function add (x,y){
  return  x + y; //RETURN
}
```

#### 💡**NOTE:**
> We use arrow functions when we want just a function that returns a value and doesn't do anything else - it has only one line statement that returns a value.

For one-parameter functions, parentheses are optional:
```javaScript
x => x * x;
(x) => x * x;
```










