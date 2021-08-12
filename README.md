# JS-DOM-SCRAPING
DOM WEB SCRAPING
Create Scrapping function.js
Site: https://getintopc.com

As a starting point in my Web Scraping tutorial series, I start with a simple example to demonstrate how web scraping is done with the use of Javascript.
The function resented can be copied to the Development Tools console which will execute when the return key is pressed on the console.

This function will then Select all the instances of div tags with a class attribute of [post-type] and store the instances in a list.
We then loop ever the list, and with every iteration, we focus on the instance of a div and get the following:

1). Get a [a] tag which on the render represents the title of the div elements' content. We will then get the [href'] attribute which holds the URL and the text which represents the title text.

2). Target the [img], which in the instance there is only one, and get the [src] attribute to get the location of the image

3). Target the [p] tag, which in this instance there is only one, and get the text on it, after setting the nested [a] tags' text to [' '].

4). define a new variable called product which will be an object with the attribute is the variable create recently. { URL,title,image,description }.

5). At the top of the just before the loop declaration, declare a variable [Products] and initialize it as an empty list or array.

6). After the declaration of the [product] object in the loop, push the new [product] object to the [Products] array

#Note:
On line 9 I selected the [H2] because it is parent to the [a] tag we want to target to get our URL and title.
