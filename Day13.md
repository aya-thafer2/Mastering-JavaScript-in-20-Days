# Day 13 🤩


##  Scope 


* Nested Scope.

* Hoisting.

* Closure.
  
* Modules.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/c652dfde-12b8-4a43-9adc-c369aafb8ece)

📌 JavaScript organizes scopes with functions and blocks.

### Compilation & Scope

We're going to pretend as if a conversation is happening in this processing of the JavaScript program. There's going to be two actors, two entities that are going to be talking:
* One is the ***compiler***, the thing that's processing the JavaScript program. It's the compiler who says, hey, I have this thing.
* The other one is the ***scope manager***, and scope manager is the one that makes buckets, makes marbles, drops the marbles in. It's the scope manager who says, I'm gonna make a plan for that, I'm gonna make a plan for a bucket and make a plan for a marble.

1. And that'll be our first pass through the program, is that **compilation step**. 
2. And then after we've set up all those plans, then we'll come back and **execute the code**. 


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/022e19b0-da0b-4df2-b32b-43505444f2aa)


#### 💡 **NOTE**: 
> * Having two varibles with same name in different scopes called **shadowing**.
> * All of the scopes that we're dealing with, all of the lexical scopes and identifiers, that's all determined at compile time. It's not determined at run time. It is **used** at **run time**, but it is **determined** at **compile time**.







