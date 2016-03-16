---
layout: post
title: Coding Folks
date: '2014-03-05 21:42:51'
categories: blog
tags: [Computer Science, Women in CS, Teaching]

---

Wednesday mornings are one of my new favorite times of the week. *"Mornings?" you ask. "What could possibly happen on a Wednesday morning to make it so awesome?"*

Wednesday mornings are when I get to teach eighth graders programming with Python.

I'm part of an organization at Berkeley for students in science and engineering. Those of us in computer science interested in expounding our knowledge to a younger generation of prospective programmers received an opportunity to do so, with eighth graders at a local middle school.

The coolest part to me? All six of the students who want to learn to code are girls. Who knows? In four more years these girls may be studying in the [EECS Department](http://eecs.berkeley.edu) at Berkeley, breaking stereotypes and kicking butt because they started learning *now*.

## Last Week's Lesson
Last week, I taught one girl how variables and strings work in Python functions through the game of MadLibs. We made an awesome story about Doctor Who, and I think she really began to understand why a function can have multiple arguments, and how a variable can be inputted as a *placeholder* of sorts.

In MadLibs, you must provide words for nouns, verbs, adjectives, etc. before you can see the finished story. In Python, a simple `name` argument can become any person's name that you want when you call a function. And when you write in the name, you don't get to see the "story" that's printed until you've finished providing all the variables.

	def hello(name, color):
    	print "Hello " + name + " with the " + color + " hair!"
    
    >>> hello("Bob", "blue")
    Hello Bob with the blue hair!
    
This was just one of those simple devices that I found really helpful in both explaining the material in a more fun way, and relating it to something the student had probably enjoyed playing with before.

## Today's Lesson
This week, we started going over more math-related coding. Our group teaches during their math class, so it was a really cool way to combine lessons.

They had recently learned the **quadratic formula**, so after explaining the differences between ints (`42`), and floats (`42.0`), we taught them about a useful function that Python already provides: `pow(x, y)`. Once they understood how powers worked in Python, I helped them write a square root function to move slowly into the quadratic formula.

	def square_root(x):	
    	return pow(x,0.5)

After a couple of times of calling the function in the console to understand that putting a number to the power of 0.5 did in fact find the square root, they were ready to move on to the big leagues. They wrote their quadratic formula:

	def quadratic(a, b, c):
    	square = square_root(pow(b, 2) - 4 * a * c)
        ans1 = (-b + square) / (2 * a)
        ans2 = (-b - square) / (2 * a)
        print "x = " + ans1 + ", " + ans2

The girls didn't get *exactly* this far (after defining `square` they only had time to `return (-b + square) / (2 * a)` before their teacher called them out to lunch), but they were able to run their code, input numbers for `a`, `b`, and `c`, and see that it actually worked.

Seeing their excitement made me even more excited. It's easy to forget that simple parts of coding - simple things you code such as math equations - can be so magical when you first learn them. I had so much fun watching the girls have even *more* fun, sharing what they learned with each other and creating a collaborative Google Doc of their notes for future reference. Smiles jump onto their faces everytime they plug in a function to the console and grasp the concept of why what they wrote *works*.

Learning to code is empowering - now instead of using a calculator, they can program their own quadratic equation and solve many more problems just by inserting new numbers for a, b, and c. 

I can't wait to see what else they discover.

### Notes
* The girls use [Codecademy Labs](http://labs.codecademy.com/) to practice their Python, because it provides an awesome text editor + console combo.
* The title of this post, *Coding Folks* is based on seeing the teacher write "Coding Folks up here!" on the board every week so the girls know where to sit.