# 4: The Ground 4loor
It's time to add some usefulness to our site. This includes extra pages as well as functionality in a contact form. To do this, we're going to move on from our good ol' standby of `document`. Let's admit it: `document.getElementById()` is kind of a annoying, to say nothing of `element.appendChild()` or `element.createTextNode()`, or even `element.innerHTML`. There has to be a better way.

There is! It's [**jQuery**](http://jquery.com)

## What is jQuery?
jQuery is a JavaScript library that focuses on making annoying steps in working with the DOM easier. There are a few other additional tools that generally make JavaScript an easier language to use.

On the other hand, jQuery introduces an often-confusing concept for new programmers, but one that is necessary to for web development: **callbacks**.

## Callbacks/Anonymous Functions
In JavaScript, as in any other programming language, we use **functions** to contain useful code that we'll call upon over and over. The syntax for this looks like:

    function foo(arg) {
      var answer = arg * 7;
      return answer;
    }
Alternatively, we can use the `var` declarator to name a function:

    var foo = function(arg) {
      return arg * 7;
    }

Same deal. But sometimes we don't want to bother committing a function to memory space because we will only need at very specific points in our program's runtime. In this case, we can use **anonymous functions**. Anonymous functions appear often as arguments to other functions. Consider the following example.

### `strModify()`
Suppose I have a function called `strModify()` that takes two arguments: a string, and a function that will modify the string in a special way. The function definition is as follows:

    function strModify(str, func) {
      return func(str);
    }

So whatever string I pass to `str` when I call `strModify` will then be used as an argument to the `func` function.

Now let's suppose that in my program, the string modifications I'll need to use vary greatly, so there's no need to save the functions in variables; it makes more sense to just define the function when I need it. That's what anonymous functions are for! Here's a simple—if contrived—example, first without an anonymous function:

    //Without Anonymous Functions
    //First we define the function we'll use to modify the string
    function capitalize(str) {
      return str.slice(0,1).toUpperCase() + str.slice(1);
    }
    //Then we call strModify()
    strModify("bob",capitalize);

Notice that in the example above we don't add parens after `capitalize` when we use the function as an argument in `strModify()`. That's because we're not actually *calling* the function there; we're referring to it. We do, however, call it inside of `strModify()` with the line `return func(str);`. That will call *any* function we pass as the second argument to `strModify()`.

Alright, but we're going to use a bunch of different string modifications, and we have decided it's not necessary to save them outside each call to `strModify()`. Cool. Here's what the same code looks like with anonymous functions:

    //call strModify and define function all in one!
    strModify("bob", function(str) {
      return str.slice(0,1).toUpperCase() + str.slice(1);
    });

That looks a little crazy, but the `})` pattern you see on that last line will become very familiar to you. Notice where the comma is after `"bob"`—the next piece of code we see is the beginning of a function definition. We write the whole capitalization function right inside the call to `strModify()`, *as the second argument*!

That's how anonymous functions work.

## Objectives

### Primary Objective
Write an event handler for form submission on the `contact.html` page. This will require getting values from form items using jQuery. Create a JSON object and log it to the console. After successful collection of the data, clear the form.

### Secondary Objective
When form information is submitted, it needs to go somewhere. Back in the day, we'd send it to a PHP handler. In these JavaScript-dominated days, we might use a Node.js backend to handle form data. I've made one just for you. By sending your JSON data to **http://x.mirman.org:1031/contact**, we can simulate this process. If your code works, you'll get a success notification returned, which you can log from your callback function.
