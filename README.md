# Demo of issues with frameless Electron windows when using screensharing

Some of our customers at [Pitch](https://pitch.com/) have reported that when
they share their screen via Zoom, sometimes our app would stop responding to
clicks. It took us a while to reproduce this issue, and I believe we have a
reliable demo now. Due to my almost complete ignorance of Electron and Zoom
internals I can't tell exactly how and why this is happening, but I can share
some specific symptoms to narrow the search area:

* What happens is that content is partially drawn in an Electron window. Some
  areas of the window show the up-to-date content, while others seem to show the
  previous state.

* The issue resolves itself with the next event that causes the app to redraw
  (user interaction, remote sync event etc.)

* It happens only while screensharing. I can reliably reproduce it while
  screensharing in Zoom, and our customers reported the same behaviour with
  Microsoft Teams and Google Meet.

* It happens only in a frameless Electron window. We can't reproduce this issue
  with the same application running in a window with a default macOS title bar.

I've built this very minimal Electron app to demo the issue.

Here's how the glitches look like:

![2021-11-12 14 13 05](https://user-images.githubusercontent.com/318902/141473909-0c62715a-549f-49b8-b750-8ce9943aa897.gif)

![2021-11-12 14 21 45](https://user-images.githubusercontent.com/318902/141473915-849a0524-0c84-4597-b0a6-08396e42ed21.gif)

Here's a video of me trying to reproduce it:

[![Electron frameless window issue when screensharing](https://img.youtube.com/vi/JrrInNTNN00/0.jpg)](https://www.youtube.com/watch?v=JrrInNTNN00)


## Requirements

Project was built using Node 16 and Electron 15.3.1. The error is reproducible
on the last two macOS versions, 11.x.x and 12.x.x.

## How to run the project

* `npm install`
* `npm run electron`

At this point you should see two Electron windows: one with a default macOS
title bar and another frameless window without a title bar.

## How to reproduce the issue

* Checkout this project and follow the "How to run" steps.

* Download and launch a GPU benchmark to add aditional load to the GPU. I've
  used [UNIGINE Valley](https://benchmark.unigine.com/valley). Make sure you run
  it in a windowed mode (not fullscreen).

* Start a new Zoom meeting, make sure your video is turned on and begin 
  screensharing your entire desktop.

* Make sure a part of the GPU benchmark window is visible, and also both
  Electron windows are visible too, all at the same time.

* Click around the coloured slides in the frameless window. Sometimes it helps
  to do several clicks quickly, and then wait for a few seconds before the next
  click. At some point, probably one in every 10-15 clicks, you should see a
  visual glitch of some sort.

## Contact

Reported by [Misha Karpenko](me@mkarp.co).
