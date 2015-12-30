Install guide (for Dan):
- First of all thank you
- Second of all this obviously has a long way to go
- Thirdly, the section of this under "///..." is old just fyi
- Host a bish locally etc. etc.

<h1>LOBBY</h1>
<h3>(current focus)</h3>
- It's accessible by clicking "menu" in the header (header is accessible via the carrot in the top-right corner of any view)
- Also accessible as /#/lobby

<h2>ONCE IN THE LOBBY</h2>
- You'll have to refresh to see the install(ation) previews [which are currently green rectangles]
- this is because they're loaded via a window "load" event listener, and the window isn't reloading automatically from ui-router (just swapping in/out different views)
- you can find that ^ listener and its relevant code line 260-298 in lobby.html
- <b>need the code triggered by this event listener to trigger when the ng-repeat up top finishes</b>

- In js/gallery.js, you'll find the ng-repeat-finish directive
- In js/controllers/gallery.controller.js lines 31-54 you'll find a bunch of pathetic stuff...
- ...on line 56 you'll find the pure event listener for ng-repeat-finish

/////////////////////////////////////////////////////////

This will be awesome.

User Stories (pretty straightforward):
- As a user, I can view a gallery home page without authenticating
- From the home page, I can view all posted installations
- I can scrub through the available installations in Tinder-esque fashion
- I can tap an installation to reveal more information about it
- I can launch an installation from the ^ more info menu
- I can experience immersive art with my phone in landscape mode
- I can pause an installation by turning my phone to portrait
- Once paused, I can relocate to the home page from an installation
