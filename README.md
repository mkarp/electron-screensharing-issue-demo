# Demo of issues with frameless Electron windows when using screensharing

## Requirements

Project was built using Node 16 and Electron 15.3.1. The error is reproducible
on the last two macOS versions, 11.x.x and 12.x.x.

## How to run the project

* `npm install`
* `npm run electron`

At this point you should see two Electron windows: one with a default macOS
title bar and another frameless window without a title bar.

## How to reproduce the issue

Video coming soon.

* Checkout this project and follow the "How to run" steps.

* Download and launch a GPU benchmark to add aditional load to the GPU. I've
  used [UNIGINE Valley](https://benchmark.unigine.com/valley). Make sure you run
  it in a windowed mode (not fullscreen).

* Start a new Zoom meeting and begin screensharing your entire desktop.

* Make sure a part of the GPU benchmark window is visible, and also both
  Electron windows are visible too, all at the same time.

* Click around the coloured slides in the frameless window. Sometimes it helps
  to do several clicks quickly, and then wait for a few seconds before the next
  click. At some point, probably one in every 10-15 clicks, you should see a
  visual glitch of some sort.

## Contact

Reported by [Misha Karpenko](me@mkarp.co).
