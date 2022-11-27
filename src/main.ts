import { join } from "path"

import { app, BrowserWindow } from "electron"

const createWindow = () => {
  const window = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  })

  window.loadFile(join(__dirname, "../index.html"))

  window.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
