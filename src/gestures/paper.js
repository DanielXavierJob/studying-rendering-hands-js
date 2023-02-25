const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const emoji = "🖐"
const PaperGesture = new GestureDescription('paper');

// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for(let finger of Finger.all) {
    PaperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

export default {
  emoji,
  gesture: PaperGesture
}