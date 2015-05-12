---
layout: post
title: Learning to Arduino
date: '2014-03-14 18:00:29'
categories: blog
tags: [Photography, Computer Science, Critical Making]

---

**Happy Pi Day!**

I hope you have a mathematical 3/14 today, especially at 1:59 PM if you know what I'm saying :)

##And now...onto the arduino!

So yesterday I created my very first arduino circuit. It was the simple [Blink](http://arduino.cc/en/tutorial/blink) circuit they tell everyone to do as their first step. Not the most impressive circuit ever, but it's a start.

![My first arduino circuit - making an LED blink](/content/images/2014/Mar/2014_03_13_16_02_57.jpg)
*Look at that little LED...so ready to shine*

I'm learning how to program an Arduino for my second group project as part of [Critical Making](http://make.berkeley.edu/), an awesome interdisciplinary grad class that focuses on the "making" culture and designing/thinking critically.

Our project also relies on an accelerometer as one of its sensors. The [ADXL362 accelerometer](https://www.sparkfun.com/products/11446) needs to easily attach to the breadboard, so yesterday I learned techniques of soldering as well. I was pretty scared that I was going to burn the circuit beyond repair as I tried to fuse it to the solder, but I managed to finish the job without any problems!

![The accelerometer after it has been soldered](/content/images/2014/Mar/2014_03_13_16_03_43.jpg)
*I soldered the accelerometer upside-down so I could still read the pin names*

And now, behold my second circuit ever! I actually just followed [this tutorial](http://ez.analog.com/docs/DOC-2222) provided by the library for programming with the ADXL362. The circuit simply reads in and prints out the endless data that the accelerometer is providing. Not terribly exciting yet, but this mechanism will be incredibly important for our project.

![My second circuit ever - uses an accelerometer](/content/images/2014/Mar/2014_03_13_16_44_41.jpg)
*Fancy clear breadboard so I can see how my circuit is connected*

###Notes:

* My arduino for this class came as part of the [SparkFun Inventor's Kit](https://www.sparkfun.com/products/12001), which comes with tons of materials, wires, sensors and more, as well as a learning guide filled with circuit diagrams for you to try.