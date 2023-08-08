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


* For **one-parameter** functions, *parentheses* are **optional**:
```javaScript
x => x * x;
(x) => x * x;
```
* For **multiple parameters**, *parentheses* are **required**:
```javaScript
(fName , lName) => fName + " " + lName;
```

* If we need to **do more than just return a value**, we can use **curly braces** for "normal" function body. 
In this case, we still **need a `return`**.
```javaScript
const addAndLog(x, y) => {
    let sum = x + y;
    console.log('This is sum ',sum);
    return sum; //RETURN
}
```

### Exercises:  
```javaScript
// 1. multiply: given 2 numbers, return their product
const mult = (a,b)=>a*b

// 2. yell: given a lowercase string, log it in all caps to the console
const yell = (str)=> str.toUpperCase()

// 3. longerThan: given 2 arrays, return whether the first is longer than
//    the second
const longerThan = (a,b)=> a.length >= b.length
```



## Quiz Project 
```HTML
<!DOCTYPE html>
<html lang="en-US"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>Quiz.js</title>
    <style>
        body {
            margin: 1rem auto;
            padding: 3rem;
            font-family: sans-serif;
        }
        header {
            width: 50%;
            margin: 1em auto;
        }
        main {
            min-width: 25rem;
            max-width: 50%;
            margin: 0px auto;
            display:flex; 
            flex-direction: column;
        }
        #statement {
            border: 1px solid black;
            border-radius: 0.5rem;
            box-shadow: 5px 5px 5px gray;
            padding: 1rem;
            font-size: x-large;
            text-align: center;
            margin: 1rem 0px;
            min-height: 2em;
        }
        #explanation {
            padding: 1rem;
            text-align: center;
        }
        #options {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        button {
            padding: 0.5rem;
            font-size: medium;
            border-radius: 5px;
        }
        .correct {
            background-color: lightgreen;
        }
        .incorrect {
            background-color: lightpink;
        }
    </style>
  </head>
  <body>
    <header>
    <h1>Quiz.js</h1>
    <p>Do you know JS? Find out!</p>
    </header>

    <main>
    <div id="statement">
        
    </div>

    <div id="options">
        <button name="true" value="true">true</button>
        <button name="false" value="false">false</button>
    </div>

    <div id="explanation">

    </div>

    </main>

  

  <script type="text/javascript">


    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    // optionButtons should be all the elements within the "options" div
    // explanation should be the "explanation" div

    const statement = document.getElementById("statement")
    const optionButtons = document.querySelector("#options").children
    const explanation = document.getElementById("explanation")


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    
    let fact = {
        statement : "Arrays are like objects",
        answer : true,
        explanation :  "Arrays are a kind of object with special proprties"
    }

    
    // TODO 3: Set the text of the statement element to the fact's statement

    statement.textContent= fact.statement
    
 // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    // enable(button) should remove the attribute "disabled" from the button element

    const disable = button =>{
        button.setAttribute("disabled","")
    }

    const enable = button =>{
         button.removeAttribute("disabled")
    }


    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    
    const isCorrect = guess =>{ return guess === fact.answer.toString()}


    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
    for (let b of optionButtons){
        b.addEventListener("click", event =>{
            
        
    
            // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
            
            explanation.textContent = fact.explanation

            // TODO 7: Within the event handler function, 
            // Use a for loop to disable all the option buttons

            for (let allB of optionButtons)
                disable(allB)
        

            // TODO 8: Within the event handler function,
            // Get the guessed value from the clicked button
            // Use a conditional to compare the guess to the fact's answer
            // and add the "correct"/"incorrect" class as appropriate

            if (isCorrect(b.value)){
                b.classList.add("correct")
            }else{
                b.classList.add("incorrect")
            }

        })
    }
    
  </script>

</body></html>
```






