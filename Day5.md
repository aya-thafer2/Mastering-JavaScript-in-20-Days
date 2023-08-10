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


## Doggo Fetch Project 
The whole project is done in [Day6](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/edit/main/Day6.md).




## (A)synchronous code: 
### **Some things that take time:** 

1. Waiting for user events.
2. Asking a user to pick a file. 
3. Getting permission to access the camera/mic. 
4. Loading data from the interwebs.


## FreeCodeCamp challenges🔥: 
1. [Use Multiple Conditional (Ternary) Operators](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)

My solution:
```javaScript
function checkSign(num) {
return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);
}
```
2. [Use the map Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

My solution:
```javaScript
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

let ratings = watchList.map( movie => ({title: movie["Title"], rating: movie["imdbRating"]}));

// Only change code above this line

console.log(JSON.stringify(ratings));
}
```


3. [Use the filter Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

My solution:
```javaScript
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList = watchList.map(movie => ({title:movie["Title"],rating:movie["imdbRating"]})).filter(filteredMovie => Number(filteredMovie["rating"])>8.0);

// Only change code above this line

console.log(filteredList);
}
```

4. [Golf Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)

My solution:
```javaScript
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes === 1) return "Hole-in-one!";
  else if(strokes <= par - 2	) return "Eagle";
  else if(strokes === par - 1	) return "Birdie";
  else if(strokes === par	) return "Par";
  else if(strokes === par + 1	) return "Bogey";
  else if(strokes === par + 2	) return "Double Bogey";
  else if(strokes >= par + 3 ) return "Go Home!";

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
}
```

