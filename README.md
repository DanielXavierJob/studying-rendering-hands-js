This repository aims to study how the finger pose is used, as well as to refactor the code improved by Erick Wendel.

View the project running in => [View Project](https://studying-rendering-hands-js.vercel.app/)



# How to create a new pose?

Create a file with the name of the pose in the "src/gestures" directory

E.g. ``paper.js``


to call a constants

``const { GestureDescription, Finger, FingerCurl } = window.fp;``

create a constant named ``emoji`` with the emoji.

Ex: 

``const emoji = "🖐"``

create a GestureDescription and specifications of gestures
after it, export default the emoji and the const utilized to store GestureDescription, utilizing the params {emoji, gesture}

Ex: 

``
export default {
  emoji,
  gesture: PaperGesture
}``


after it, access the file ``index.js`` finded in ``src/gestures``

and import the gesture, after it export in index.js and finish, u gesture has been added

