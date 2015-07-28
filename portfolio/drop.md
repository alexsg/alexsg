---
layout: post
title:  "Drop"
permalink: /portfolio/drop/
featured_image: /media/Drop-02.png
excerpt: "Every memory has its place."
---

###Dates
September to December 2014

###Built With
[Kyle Dillon](http://kylejamesdillon.com/), [Corey Short](https://www.linkedin.com/in/coreyshort), [Imran Yousuf](https://www.linkedin.com/in/imranmyousuf), [Ruchita Rathi](http://people.ischool.berkeley.edu/~ruchitarathi/)

###Mission
To bring urban travelers and city "experts" together by redefining the art of discovery.

###My Role
UX Researcher, UI Designer

###Tagline
Every memory has its place.

###Technologies
Adobe Illustrator, FramerJS, Android SDK, Camera API, Qualcomm Toq API, Google Maps API

---

<!-- <img src="https://hackster.imgix.net/uploads/image/file/23893/000_Final_Presentation.004.png?w=1280&h=960&fit=clip&s=8b8082f9f115c1cc87e880950924a092" class="lazyload" title="team card"/> -->

![poster](/media/DropPoster.jpg)
*[View the full poster](/media/DropPoster.jpg)*

Jump down to the [video demo](#video-demo) of the finished app.

##Background

We set out to bring urban travelers and local city experts together. As an example, you're all the "experts" in Berkeley, and urban travelers visiting the city or campus for the first time want to find out about real Berkeley life, but how do they get to us as experts? Drop makes it possible. There are tons of recommendation apps and travel guides out there, but they overload the traveler with information. Go on Yelp and search for food — you'll see pages of 4 and 5 star restaurants with dozens of pictures each, and it takes ages to make a decision. Or, look on these guides and get stuck in a tourist trap instead of the hidden gem that only local experts know about.

With Drop, we've also redefined the art of discovery. When we connect travelers with experts, the travelers can feel a sense of both spontaneity and ownership in what they find: the local, hidden gems.

##Competitive Analysis
In other apps we researched during our competitive analysis phase, such as Yik Yak, Shotnote, and Drop A Memo, we saw that the key element of discovery was missing.

<img src="https://hackster.imgix.net/uploads/image/file/23897/000_Final_Presentation.008.png?w=1280&h=960&fit=clip&s=5260d7c623cf9fbfcc3fa9773dfa0c5e" class="lazyload" title="competitive analysis"/>

Drop, paired with the Toq watch, changes that. It allows users to actively search out drops or passively and spontaneously stumble across amazing finds.  We also saw a lack of versatile media and sharing settings, so we focused on those areas as well. In everyday use, the phone app is geared more for “expert” sharing, and the watch app toward traveling and discovering.

##User Studies
We observed two spectrums of the target users — expert native stranger and novice urban traveler. Target users were observed within their regular environments and were charged with tasks like finding a great bar to have a drink and some food. We extensively applied the **master-apprenticeship model** throughout the user study. We also observed each urban traveler's interaction with his or her digital self and tour guides to understand various touchpoints of the discovery process.

We periodically queried the user about his or her decisions, choices, and problems that came from determining the essential tools, services, and functionality required in order to complete the given task. We also made sure that the user explained the prime motivations behind his or her actions during the search process.

Through **observation techniques**, we aimed to understand the sequence of various events and assumptions. In our case, we observed that end-users (urban travelers) assumed that the native stranger was master of information by default.

###Findings

  - Users want to be in vacation auto-pilot mode.
  - Users need visibility of social activities and information in local environment.
  - Users are overloaded with information during their search process.

##Design Process
Iterating made a huge difference, both with functionality and aesthetics.

![iteration 1](https://hackster.imgix.net/uploads/image/file/23899/000_Final_Presentation.010.png?w=1280&h=960&fit=clip&s=7c69c18012381ce21d7d6beef7403fae)
*First major iteration of Drop*

Drop's phone app started out looking more like an app for navigation than one for social and sharing. It also lacked a modern design aesthetic.

![iteration 2](https://hackster.imgix.net/uploads/image/file/23900/000_Final_Presentation.011.png?w=1280&h=960&fit=clip&s=155413270870b306cf98667f9d663b39)
*Second major iteration of Drop*

In our first redesign, we focused on the latter, and upgraded to material design. But we still found Drop's phone UI clunky to navigate, with too many screens and steps to get to the key feature of the phone — sharing.

![iteration 3](https://hackster.imgix.net/uploads/image/file/23902/000_Final_Presentation.012.png?w=1280&h=960&fit=clip&s=f8014d02702a274ea3faf0a75aa7099e)
*Third major iteration of Drop*

In our second major redesign, we pivoted on the functionality, opting to focus on visual media rather than text, thereby simplifying the app immensely. We also used a mode switch to help people distinguish between sharing with friends and sharing with the public, instead of complicated picking and choosing. And, we updated our privacy settings to use usernames and pictures, rather than anonymity for more accountability in public drops.

##Style Guide

![style guide](/media/drop-style-guide.png)

##Video Demo

Drop has only 3 simple steps:

  1. Tap to snap.
  2. Swipe to the side to delete.
  3. Swipe down to drop it on the map at your current location.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/5SuNIhkemUw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

##Toq Watch Pairing

One of the main goals of the project was to pair our app with the Qualcomm Toq watch functionality in a nontrivial way. To do this, we made the watch essential to the collection of drops.

![toq watch finds drops](https://hackster.imgix.net/uploads/image/file/23907/000_Final_Presentation.017.png?w=1280&h=960&fit=clip&s=ea3e5ba85caf44021b71f3b592c03971)

Travelers can easily pick up drops around them at any moment, deliberately or not, thanks to Toq notifications synced with the phone app.

![toq watch list of drops](https://hackster.imgix.net/uploads/image/file/23908/000_Final_Presentation.018.png?w=1280&h=960&fit=clip&s=08f4c198e0a425dc2f54e4f274439e8e)

If there's more than one drop in the vicinity, they can choose which to open from the list.

![collected image saves to phone](https://hackster.imgix.net/uploads/image/file/23913/000_Final_Presentation.020.png?w=1280&h=960&fit=clip&s=23ccc6a10d64fb896748397c179339ae)

And once they have, that drop is collected to their phone, so people can share memories, save them, and make new ones too — all tied to a location. Local experts can make their mark, and urban travelers can feel like a part of the city already. Here's a video of the Toq app in action.

##Conclusion

Overall, we wanted to stay playful, keeping on-screen interactions whimsical within the technical constraints of the Toq watch as well as catering to as many versions of Android's OS as possible. But the real interaction isn't with the UI — it's with the city, with strangers, with friends, with those special memories tied to that special place.
