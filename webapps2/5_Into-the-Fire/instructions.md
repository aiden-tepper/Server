<!-- TOC depth:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [5: Into the Fire(base)](#5-into-the-firebase)
	- [Persistence is a Virtue](#persistence-is-a-virtue)
	- [All Your Data are Belong to Us](#all-your-data-are-belong-to-us)
		- [Developer, choose your weapon](#developer-choose-your-weapon)
		- [Firebasics](#firebasics)
		- [Getting started with Firebase](#getting-started-with-firebase)
			- [READ THE DOCS](#read-the-docs)
	- [Objectives](#objectives)
		- [Primary Objectives](#primary-objectives)
		- [Secondary Objectives](#secondary-objectives)
<!-- /TOC -->

# 5: Into the Fire(base)
## Persistence is a Virtue
So we've added some functionality to our webapps using jQuery. We've even learned how to submit form data using jQuery, sending POST data off to some remote server, where the data will be dealt with appropriately.

But what happens to those data? We need a **persistence layer** to save our information for later use. A persistence layer could be any number of things: a text file, a .csv spreadsheet, or something more complex. Surprise surprise, we'll be using something *moderately* complex: a database.

## All Your Data are Belong to Us
Our work thus far has been in the realm of **front end development**: the part the users sees. But the database lives in the **back end**: on the server, away from prying eyes. Obviously the two work together, but it's important to understand where things actually live.

Alright, so we're storing data in the back end. We're doing so in a database. *Which database*???

### Developer, choose your weapon
There are *tons* of database options out there. Here at Mirman, we use 3 in production for our school's software services: **MySQL** (and variants like **MariaDB**), **Redis**, and **MongoDB**. Each one is excellent for different applications and different types of data. We'll go into more detail on types of databases in later lessons. For now, just know that there are a lot of choices out there.

And we're not going to use any of the choices above for this exercise! Helpful, right? There's a reason, I promise. To get started with databases, I want you to use a database technology that's as close to the form you've been using so far for information: namely, JSON. We're therefore going to use a friendly, web-hosted database for applications called [Firebase](https://www.firebase.com/).

### Firebasics

To get going using Firebase, you really only need to know 2 things:
1. Firebase stores JSON.
2. Firebase is **event-driven**.

You should know by now that JSON is JavaScript Object Notation. Essentially this means that my data are all stored within key-value pairs. Like so:

    [
      {
        name: "Blue widget",
        color: "blue",
        price: 3.99
      },
      {
        name: "Red widget",
        color: "red",
        price: 4.99
      }
    ]

Nice and clean, and easily parsed by JS when we load the data into the front end.

Now what about "event-driven"? You've seen event-driven code already, when we wrote a handler for form submission, or button clicks in jQuery. Remember?

    $("#my-button").click(function(){
        // Do something when a click happens
    });

The `click` there is an event. Remember the other way to write that?

    $("#my-button").on("click", function(){
        // Do something when a click happens
    });

The `on` function is your hint that we're telling JS what to do when a certain event occurs. Firebase works the same way. When an entry in Firebase changes, gets deleted, gets added, or when you first load—these are all events, and we need to tell our front end what to do for each event we care about. While this seems like a major hassle, there's an upside: once we write the event handlers, our dataset will update automatically, and so will the user's display *without having to reload*!

### Getting started with Firebase

You'll have to sign up for a Firebase account, which you should do with your Mirman account. That allows you do set up "apps". They're not really entire apps, just the database you'll use for one.

Firebase allows you to add data by hand, but that is going to get tedious real quick. Instead, we'll write some JS for our application that does that for us. But before we go any further, we'll need to create a connection between our front end. You might have noticed the URL when you set up your Firebase "app", something like `https://your-app.firebaseio.com`. We're going to need that, along with the Firebase JS code to create our connection.

Somewhere in your `<head>`, you'll need this line to link up Firebase's definitions:

    <script src="https://cdn.firebase.com/js/client/2.3.1/firebase.js"></script>

Then in `app.js`, you'll use that code (no need to look over it, but feel free) to define a "reference"—the link between Firebase and our front end. Something like:

    var ref = new Firebase("https://your-app.firebaseio.com");

That `new` keyword might look new to you. We'll explain it soon. For now, just know that `ref` becomes an "instance" of a Firebase database.

So now we have a connection, but remember that everything in Firebase is event-driven. Just like we did with form submissions, we need to set up handlers for events. I won't give you that code; you'll have to...

#### READ THE DOCS
We basically never use anything in this class that doesn't have excellent documentation. [USE IT](https://www.firebase.com/docs/web/guide/retrieving-data.html).

## Objectives
We're building a feedback form/page. It will be quite simple, with nothing but a list of feedbacks including time, submitter, and their comment. We'll have a button that pops up a form to add a new comment. That's it!

### Primary Objectives
1. Use jQuery and Firebase to create either a `<ul>` full of `<li>`s for each comment, or just a set of `<div>` elements, one for each comment, showing the comments vital statistics (commenter, date, comment text).
2. Create a functional form to add new comments.

### Secondary Objectives
1. Implement a "favorites" feature, where each comment can be "hearted" or "starred" by a given user. Each comments total favorites should be stored as a key in the database.
