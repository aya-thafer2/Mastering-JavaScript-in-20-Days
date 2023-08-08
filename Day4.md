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
