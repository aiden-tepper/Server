# 2: Plane Speaking
A common pattern in web development is creating repeated elements for a
list of objects. The more we can automate this task (i.e., take the load off of
the HTML and put it on the JavaScript), the better. This means we won't have to go add more messy HTML when we change our array (list) of items.

## `for` loops
In `app.js` you see a `for` loop. This structure repeats the enclosed commands until the condition stated in the loop initialization is met. The `i` variable
can be named anything we want; it only exists in the scope of the loop. We use "i" because this variable is known as an **iterator**. Every time through the loop, we *increment* the iterator by one (`i++`).

There are other ways of writing `for` loops and we will use some of them. However, this version, while annoying to write, also happens to be the fastest.

## Primary Objective
Using the `document` methods we learned about in Lesson 1 and a `for` loop, use `app.js` to add a list item (`<li>`) for each experimental aircraft in our array.

## Secondary Objectives

### Chaos→Order
There's a natural order to these airplanes—numerical and chronological. Our `index.html` has a `<ul>`, but is that the right choice for this? Since our list has a natural sequence, replace `<ul>` with a more appropriate tag.

### Details
So we have our list of X-Planes, but no info about them. Since the `<li>` tag can contain other tags like `<h2>` and `<p>`, we can easily build out our list items with more info. Go find some fun information about these aircraft.

Yes, you can [use Wikipedia](https://en.wikipedia.org/wiki/List_of_X-planes), but don't copy/paste!.

Don't forget that you want to add these elements in the loop, not in the HTML. How could we do this easily? Would arrays help?

### Pics or it didn't fly
Alright great. We have a list item with a description for each airplane, but who wants to *read* about these things, amirite??? Let's add some pictures (again, Wikipedia's fine).

The amount of info about our planes is getting a little complex. We might want to consider moving the array of info (or object, hint hint) to another file and link that before our `app.js`.

Also, at this point, we might consider moving from a list element to separate `<div>` elements for each aircraft.
