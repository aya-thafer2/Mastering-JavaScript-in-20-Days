# Day 13 🤩


##  Scope 

📌 **Scope**: where to look for things.


📌 JavaScript organizes scopes with ***functions*** and ***blocks***.

### Compilation & Scope

We're going to pretend as if a conversation is happening in this processing of the JavaScript program. There's going to be two actors, two entities that are going to be talking:
* One is the ***compiler***, the thing that's processing the JavaScript program. It's the compiler who says, hey, I have this thing.
* The other one is the ***scope manager***, and scope manager is the one that makes buckets, makes marbles, drops the marbles in. It's the scope manager who says, I'm gonna make a plan for that, I'm gonna make a plan for a bucket and make a plan for a marble.

1. And that'll be our first pass through the program, is that **compilation step**. 
2. And then after we've set up all those plans, then we'll come back and **execute the code**. 


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/022e19b0-da0b-4df2-b32b-43505444f2aa)


#### 💡 **NOTE**: 
> * Having two varibles with same name in different scopes called ***shadowing***.
> * All of the scopes that we're dealing with, all of the lexical scopes and identifiers, that's all determined at compile time. It's not determined at run time. It is ***used*** at ***run time***, but it is ***determined*** at ***compile time***.

### **Before executing the code :**

1. Scope maneger detrmine the scope.
2. Then bring data or store it in the variable.

### Execute the code

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/d9a325e3-6639-4a16-9e50-7e622dde0702)



###  Auto Global: 

📌 If I try to use varible in cuurent scope without declaring it, it will be delared in the globale scope.

So if you try to assign to a variable that's never been formally declared. Once you arrive at the global scope, if you say hey, global scope, I'm looking for this marble called topic, ever heard of it? And the global scope instead of saying nope, sorry error, the global scope's gonna say I just created one for you.


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/72ba93a4-7e54-4a6f-bfa4-568760672715)


### Strict Mode:

📌 This will prevent Auto Global.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/abbeddea-c737-4b76-85f2-97fcb17de535)

### Nested Scope:

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/3b0d46a9-dc3e-422f-bf4f-82d4da5feaa0)








