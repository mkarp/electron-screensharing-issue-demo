const { BrowserWindow, app } = require("electron");

app.on("ready", function () {
  const win = new BrowserWindow({
    x: 30,
    y: 30,
    width: 640,
    height: 480,
    title: "RowerPoint (default title bar)"
  });
  win.loadFile("renderer.html");

  const winNoFrame = new BrowserWindow({
    x: 30 + 640 + 30,
    y: 30,
    width: 640,
    height: 480,
    titleBarStyle: "hiddenInset",
    title: "RowerPoint (frameless)"
  });
  winNoFrame.loadFile("renderer.html");
});
