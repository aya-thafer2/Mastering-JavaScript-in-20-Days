# Day 9 🤩

## Asynchronous JavaScript cont. - *Web Browser APIs with callback functions*

### Web API Example:

```javaScript
function printHello(){ console.log("Hello"); }
setTimeout(printHello,1000);
console.log("Me first!");
```

![Screenshot (213)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/5522346d-7384-429d-a249-79ebe6eb5eb0)


### Callback Queue and Event Loop
```javaScript
function printHello(){ console.log("Hello"); }
function blockFor1Sec(){ //blocks in the JavaScript thread for 
1 sec }

setTimeout(printHello,0);
blockFor1Sec()
console.log("Me first!");

/* 
	Me first!
	Hello
*/
```


![Screenshot (214)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/e76c5710-483f-42fd-adda-76297f0a03d7)


![Screenshot (218)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/ce51ff61-9a01-49bd-8f28-80c365ced84c)


![Screenshot (220)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/34ded88b-47a5-48f2-938b-c265242abe41)


![Screenshot (226)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/68e80e40-99fb-4073-a63f-b9d5da0f9b5d)


* Is there anything on the call stack? If there is, just do it. Is there anything left running global, do it. If it's all finished, head down to the queue. And that feature is known as the **Event Loop**. And it's job is simply to very quickly be checking constantly.
* We use `setTimeout` to trigger a timer, an associated `printHello` function was passed to it. Yes, it said 0 milliseconds until that function could be run. But what do we now know that really means? ***It means that it's 0 milliseconds until that function is put into the callback queue.***
* And then all our global code's gonna continue running, however long it takes. And when it's all done, then the event loop goes, hooray, the Call Stack is done. All global coast finish running, and we grab from the Callback Queue and put `printHello` in the Call Stack.


> ### 💡Note:
> setTimeOut doesn't do anything in JS it consequences in the web browser.



```javaScript
function printHello() { console.log("Hello"); }

function blockFor1Sec() {
    setTimeout(()=>{console.log("1 sec");},1000)
    //blocks in the JavaScript thread for 1 sec
}

setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me first!");

/* 
	Me first!
	Hello
	1 sec
*/
```


```javaScript
setTimeout(()=>console.log("Hello"), 0);

for (let i=0; i<100; i++)
    console.log("Me first!");

//for loop makes block for the execution, when finish the loop will print Hello
```



```javaScript
function setTime() {
    setTimeout(()=>{console.log("Hello")},4000);
}

for (let i=0; i<5; i++)
    setTime();

console.log("Finally");

// will print Finally then 5 Hello's 
```
  
## Promises 

* Special objects built into JavaScript that get returned immediately when we make a call to a web browser API/feature (e.g. fetch) that’s set up to return promises (not all are).
* Promises act as a placeholder for the data we expect to get back from the web browser feature’s background work.

```javaScript
function display(data){
    console.log(data)
}
const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display); 
 
console.log("Me first!");
```
A `promise object`, it's just an object *automatically created* in JavaScript by `fetch`.

It has 3 properties:
1. `Value` which is `undefined`.
2. `onFulfilled` which is an `empty array` - it's a hidden property.
2. `onRjection` which is an `empty array` - it's a hidden property.



![Screenshot (228)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/6f4dc35f-fe42-4b2d-8cd7-99d63290901a)


![Screenshot (240)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/23e9d544-0877-4b14-88fa-f625683555b4)


### `.then` method and functionality to call on completion
* Any code we want to run on the returned data must also be saved on the promise object.
* Added using `.then` method to the hidden property ‘`onFulfilment`’.
* Promise objects will automatically trigger the attached function to run (with its input being the returned data.


### Web APIs & Promises Example:

```javaScript
function display(data){console.log(data)}
function printHello(){console.log("Hello");}
function blockFor300ms(){/* blocks js thread for 300ms*/ }

setTimeout(printHello, 0);

const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display);

blockFor300ms();
console.log("Me first!");
```


![Screenshot (253)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/0dc56074-37c5-448e-b82d-4522871faeed)

###  Order of execution: 
We have three things to organize the execution:

1. **call stack**.
2. **microtask queue**.
3. **callback queue**.
 
 
### Promises review:
The promise object give us this amazing feature, that means if we get an error back - not the actual response object we want. It's not even gonna auto trigger any of your functions in `onfulfilled`, it's gonna trigger any functions that you stored in `onRejection`.

how do we get functions in `onRejection`?
there's two ways:
* Using `catch`: `futureData.catch(errfun)` >>> any function we pass in there, it's going `onRejection`.
* Using `.then`: `futureData.then(fun,errfun)` >>> the second argument fun is going to `onRejection`.

> ### 💡Note:                        
> Any function i declear it as async, when I want to call it I should use .then() .catch() or use async/await.



# GSG Challenges🔥:
 
## Question 1:

You are given a function `executeInSequenceWithCBs` and some code. The task is to
modify the `executeInSequenceWithCBs` function so that it runs and executes all
the tasks inside the asyncTasks array. 

The function should return an array of messages obtained from each task's
execution.

You are only allowed to change the `executeInSequenceWithCBs` function or add new
functions/code. You cannot modify the tasks' functions.

```javascript

const task1 = (cb) => setTimeout(() => {
  const message = "Task 1 has executed successfully!";
  cb(message);
}, 3000)

const task2 = (cb) => setTimeout(() => {
  const message = "Task 2 has executed successfully!";
  cb(message);
}, 0)

const task3 = (cb) => setTimeout(() => {
  const message = "Task 3 has executed successfully!";
  cb(message);
}, 1000)

const task4 = (cb) => setTimeout(() => {
  const message = "Task 4 has executed successfully!";
  cb(message);
}, 2000)

const task5 = (cb) => setTimeout(() => {
  const message = "Task 5 has executed successfully!";
  cb(message);
}, 4000)

const asyncTasks = [task1, task2, task3, task4, task5];

const executeInSequenceWithCBs = (tasks, callback) => {}

```

**My Solution:**

```javascript

const task1 = (cb) => setTimeout(() => {
  const message = "Task 1 has executed successfully!";
  cb(message);
}, 3000)

const task2 = (cb) => setTimeout(() => {
  const message = "Task 2 has executed successfully!";
  cb(message);
}, 0)

const task3 = (cb) => setTimeout(() => {
  const message = "Task 3 has executed successfully!";
  cb(message);
}, 1000)

const task4 = (cb) => setTimeout(() => {
  const message = "Task 4 has executed successfully!";
  cb(message);
}, 2000)

const task5 = (cb) => setTimeout(() => {
  const message = "Task 5 has executed successfully!";
  cb(message);
}, 4000)

const asyncTasks = [task1, task2, task3, task4, task5];

const executeInSequenceWithCBs = async (tasks, callback) => {
    let massagesArr = [];
    
    for(let task of tasks){
        await new Promise(resolve => {
            task(message => {
                massagesArr.push(message);
                resolve();
            });
        });
    }
    
    callback(massagesArr);
};

executeInSequenceWithCBs(asyncTasks,massagesArr => console.log(massagesArr));
```
-------------------------------------------------------------------

## Question 2:

You are given a function called `executeInParallelWithPromises`, which takes an
array of APIs (represented by objects). 

Your task is to write code that fetches the data of each API in parallel using
promises. In Parallel means that the api which resolves first, returns its value
first, regardless of the execution order. 

The output of the `executeInParallelWithPromises` function should be an array
containing the results of each API's execution.

Each result should be an object with three keys: `apiName`, `apiUrl`, and
`apiData`..

```javascript
const apis = [
  {
    apiName: "products", 
    apiUrl: "https://dummyjson.com/products",
  }, 
  {
    apiName: "users", 
    apiUrl: "https://dummyjson.com/users",
  }, 
  {
    apiName: "posts", 
    apiUrl: "https://dummyjson.com/posts",
  }, 
  {
    apiName: "comments", 
    apiUrl: "https://dummyjson.com/comments",
  }
]

const executeInParallelWithPromises = (apis) => {}

```

**My Solution:**

```javascript

```
-------------------------------------------------------------------
## Question 3: 

You are given a function called `executeInSequenceWithPromises`, which takes an
array of APIs (represented by objects). 

Your task is to write code that fetches the data of each API sequentially (one
after the other) using promises. 

In Sequence means that the api which executes first, returns its value
first.

The output of the `executeInSequenceWithPromises` function should be an array
containing the results of each API's execution.

Each result should be an object with three keys: `apiName`, `apiUrl`, and
`apiData`.

```javascript

const apis = [
  {
    apiName: "products", 
    apiUrl: "https://dummyjson.com/products",
  }, 
  {
    apiName: "users", 
    apiUrl: "https://dummyjson.com/users",
  }, 
  {
    apiName: "posts", 
    apiUrl: "https://dummyjson.com/posts",
  }, 
  {
    apiName: "comments", 
    apiUrl: "https://dummyjson.com/comments",
  }
]

//modify and write your code here
const executeInSequenceWithPromises = (apis) => {}

```
 
 **My Solution:**

```javascript

```
 




