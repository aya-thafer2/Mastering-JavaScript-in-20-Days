# Day 5 🤩

## Conditionals  
### If statment: 
* If it's given some other value, JS will convert it to a boolean and decide based on its "truthiness”:

```javaScript
if ("nonempty strings are truthy") {
    console.log("this line will run");
}
//"this line will run"
```

* Objects are *truthy*, array is an object so **empty array** is **truthy**:

```javaScript
// Is an empty array truthy or falsy? 

if ([]){
    console.log("empty array is a truth value");
}else{
    console.log("empty array is a false value");
} 
// "empty array is a truth value"
```
* But **empty string** is **falsy**:

```javaScript
if (""){
    console.log("empty string is a truth value");
}else{
    console.log("empty string is a false value");
} 
//"empty string is a false value"
```
   **This happens cuz string is immutable so we can't push elements to it, other than arrays which are mutable.**
   

 
###  Loops:
#### Enhanced loop:

Traditional loop:
```javaScript
const numbers = [1,2,3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

**Enhanced** loop:
```javaScript
for (let n of numbers) {
    console.log(n);
}
```
We can use this loop to loop on string charecters cuz *strings & arrays* are ***"iterable"***:
```javaScript
for (let char of "ALOHA") {
    console.log(char);
}
/*
A
L
O
H
A
*/
```

#### 💡**NOTE:**
> Attention to the `of` in the for loop, cuz there is another for loop in JS that contains `in` but they are not the same.

> for ( let n `of` numbers) {
    console.log(n);
}



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

## map & filter: 
The map & filter methods also let us process all the items in an array

### `map` : 
 alls a function on each item in an array to create a new array:
 ```javaScript
const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
const nicknames = spices.map(s => `${s.nickname} Spice`;);

/*
	[
	  'Baby Spice',
	  'Ginger Spice',
	  'Scary Spice',
	  'Sporty Spice',
	  'Posh Spice'
	]
*/
```

### `filter` : 
Calls a true/false function on each item and creates a new array with only the items where the function returns true:
```javaScript
const mels = spices.filter(s => s.name.includes("Mel"));
```
 
 #### 💡**NOTE:**
> * `map` & `filter` return an array.
> * `map` & `filter` **DO NOT** modify the original array.
 
### Exercise: 
```javaScript
/* From the spices array, use map and filter to:

create a new array names with only the name of each girl
create a new array endInY with just the girls whose nickname ends in "y" */

const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];

const names = spices.map(s=>s.name)
const endInY = spices.filter(s=>s.nickname.endsWith("y"))
```

### Spread (...)
* It lets us take all the items in an array and spread 'em around:
```javaScript
const oldBurns = ["square", "wack"];
const newBurns = ["basic", "dusty", "sus"];

const burnBook = [...oldBurns, ...newBurns];
// equivalent to
const burnBook = oldBurns.concat(newBurns);
```
* We can also use it to pass all the items from an array as arguments to a function or method:
```javaScript
const skills = ["HTML", "CSS" , "JS"];
const newSkills = ["React", "TypeScript", "Node"];

skills.push(...newSkills);
//skills = ["HTML", "CSS" , "JS" , "React", "TypeScript", "Node"]

console.log(...skills); // this will return the elements of the array as strings
//HTML CSS JS React TypeScript Node

// this is different than this
console.log(skills); //this will return the array as an object 
// Array (6) ["HTML", "CSS" , "JS" , "React", "TypeScript", "Node"]
```


## Doggo Fetch Project  🧐🪩
```javaScript
<!DOCTYPE html>
<html lang="en-US"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>Doggo Fetch</title>
    <style>
        body {
            margin: 1rem auto;
            padding: 3rem;
            font-family: sans-serif;
        }
        header {
            width: 70%;
            margin: 1em auto;
        }
        main {
            max-width: 70%;
            margin: 0px auto;
            display:flex; 
            flex-direction: column;
        }
        img {
            max-width: 100%;
        }
        #image-frame {
            font-size: x-large;
            text-align: center;
            margin: 1rem auto;
        }
        #explanation, #score {
            padding: 1rem;
            text-align: center;
        }
        #options {
            max-width: 100%;
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
        .hidden {
            display: none;
        }
    </style>
  </head>
  <body>
    <header>
    <h1>Guess the Doggo</h1>
    <p>What breed is the dog in this image?</p>

    </header>

    <main>
    <div id="image-frame"><img src="./Final_files/PXL_20210220_100624962.jpg"></div>
    <div id="options">
    <button name="medium poodle" value="medium poodle" class="correct">medium poodle</button><button name="australian terrier" value="australian terrier" class="incorrect">australian terrier</button><button name="french bulldog" value="french bulldog">french bulldog</button></div>

    </main>

  


  <script type="module">

    const RANDOM_IMG_ENDPOINT = "https://dog.ceo/api/breeds/image/random";

    const BREEDS = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "shepherd australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "norwegian buhund", "boston bulldog", "english bulldog", "french bulldog", "staffordshire bullterrier", "australian cattledog", "chihuahua", "chow", "clumber", "cockapoo", "border collie", "coonhound", "cardigan corgi", "cotondetulear", "dachshund", "dalmatian", "great dane", "scottish deerhound", "dhole", "dingo", "doberman", "norwegian elkhound", "entlebucher", "eskimo", "lapphund finnish", "bichon frise", "germanshepherd", "italian greyhound", "groenendael", "havanese", "afghan hound", "basset hound", "blood hound", "english hound", "ibizan hound", "plott hound", "walker hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "bull mastiff", "english mastiff", "tibetan mastiff", "mexicanhairless", "mix", "bernese mountain", "swiss mountain", "newfoundland", "otterhound", "caucasian ovcharka", "papillon", "pekinese", "pembroke", "miniature pinscher", "pitbull", "german pointer", "germanlonghair pointer", "pomeranian", "medium poodle", "miniature poodle", "standard poodle", "toy poodle", "pug", "puggle", "pyrenees", "redbone", "chesapeake retriever", "curly retriever", "flatcoated retriever", "golden retriever", "rhodesian ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "giant schnauzer", "miniature schnauzer", "english setter", "gordon setter", "irish setter", "sharpei", "english sheepdog", "shetland sheepdog", "shiba", "shihtzu", "blenheim spaniel", "brittany spaniel", "cocker spaniel", "irish spaniel", "japanese spaniel", "sussex spaniel", "welsh spaniel", "english springer", "stbernard", "american terrier", "australian terrier", "bedlington terrier", "border terrier", "cairn terrier", "dandie terrier", "fox terrier", "irish terrier", "kerryblue terrier", "lakeland terrier", "norfolk terrier", "norwich terrier", "patterdale terrier", "russell terrier", "scottish terrier", "sealyham terrier", "silky terrier", "tibetan terrier", "toy terrier", "welsh terrier", "westhighland terrier", "wheaten terrier", "yorkshire terrier", "tervuren", "vizsla", "spanish waterdog", "weimaraner", "whippet", "irish wolfhound"];

    
    // Utility function to get a randomly selected item from an array
    function getRandomElement(array) {
        const i = Math.floor(Math.random() * array.length);
        return array[i];
    }

    // Utility function to shuffle the order of items in an array in-place
    function shuffleArray(array) {
        return array.sort((a,b) => Math.random() - 0.5);
    }



    // TODO 1
    // Given an array of possible answers, a correct answer value, and a number of choices to get,
    // return a list of that many choices, including the correct answer and others from the array
    function getMultipleChoices(n, correctAnswer, array) {
        // Use a while loop and the getRandomElement() function
        // Make sure there are no duplicates in the array
        const choices = [correctAnswer];
        while (choices.length < n) {
            let candidate = getRandomElement(array);
            if (choices.indexOf(candidate) < 0) { // check if this is already in the array
                choices.push(candidate); // if not, add it
            }
        }
        return shuffleArray(choices);
    }

  </script>

</body></html>
```


## (A)synchronous code: 
### **Some things that take time:** 

1. Waiting for user events.
2. Asking a user to pick a file. 
3. Getting permission to access the camera/mic. 
4. Loading data from the interwebs.

