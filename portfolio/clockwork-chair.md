---
layout: post
title:  "Clockwork"
permalink: /portfolio/clockwork-chair/
featured_image: /media/ClockworkChair.jpg
excerpt: "Chair that keeps track of how long people sit in order to push them to take more breaks throughout the day."
---

###Dates
February 2015

###Built With
[Greta Gardner](https://www.linkedin.com/pub/greta-gardner/99/418/b02), [Andy Mah](https://www.linkedin.com/in/andytmah)

###Mission
To create a clock-inspired chair that rotates over time the longer someone sits, pushing people to take more frequent breaks throughout the day.

###Technologies
Arduino, Adobe Illustrator, Laser Cutter

---

Clockwork is a chair that keeps track of how long you sit. Its seat rotates about 90 degrees over the course of three hours, ensuring that its occupant will have to take a break from sitting while the chair resets to its starting position.

There are many health risks that come with sitting for long stretches of time day after day, and Clockwork aims to create a fun an elegant way to combat these health issues. It's *time* to take a *stand* and get up out of your seat! At least until it lets you sit at your desk again.

##Clockwork Demo

<iframe width="100%" height="400" src="https://www.youtube.com/embed/iQr34T6Kir0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

##Process

It was a long process to figure out just how the chair design should reflect our timepiece inspiration.

<img src="https://hackster.imgix.net/uploads/image/file/36090/IMG_2341.jpg" title="sketch" class="lazyload" />
*One of the pages from Andy's sketchbook*

Greta and Andy focused mainly on the chair prototypes, while I focused on the electronics. Check out my [arduino code](https://github.com/alexsg/clock-chair). The hardest part was figuring out the method to keep track of time passing once the light sensor detected someone was sitting, and then rotate correctly as a result.

I set a variable which monitored the light level from the sensor (aka checked if someone was sitting), a variable to track the previous light level for my if-statements, and a constant variable to represent the mid-level of light. This ensured that in my if-statements I could figure out if someone had just started sitting or had been continuously sitting, and rotate the servo accordingly.

<img src="https://hackster.imgix.net/uploads/image/file/36080/IMG_2216.jpg" class="lazyload" title="arduino circuit" />
*The circuit featured a light sensor and a servo motor*

After making a prototype of the final design using ECO board and a jigsaw cutter, it was time to laser cut the chair and put it all together.

<img src="https://hackster.imgix.net/uploads/image/file/36095/IMG_2258.jpg" class="lazyload" title="laser cutting" />
*Cutting out the back of the chair and part of the motor mount*

<img src="https://hackster.imgix.net/uploads/image/file/36098/IMG_2299.jpg" class="lazyload" title="motor mount" />
*The motor mount to hold the servo which attaches to the seat*

<img src="https://hackster.imgix.net/uploads/image/file/36099/IMG_2306.jpg" class="lazyload" title="time to atatch seat with base" />
*Time to attach it all together!*

##Final Chair Prototype

<img src="https://hackster.imgix.net/uploads/image/file/36268/IMG_2321.jpg" class="lazyload" title="angle view of chair" />
*Angle view*

<img src="https://hackster.imgix.net/uploads/image/file/36267/IMG_2320.jpg" class="lazyload" title="back view of chair" />
*Back view of the clock hands*

<img src="https://hackster.imgix.net/uploads/image/file/36269/IMG_2324.jpg" class="lazyload" title="light sensor in seat" />
*Light sensor in the seat to sense occupancy*

<img src="https://hackster.imgix.net/uploads/image/file/36273/IMG_2355.jpg" class="lazyload" title="lil dude on the seat" />
*Our model approves of the chair!*