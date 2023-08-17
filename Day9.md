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


















