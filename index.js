const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 340,
    webPreferences: {
      nodeIntegration: true
    },
    titleBarStyle: 'hidden',
    alwaysOnTop: true
  })

  win.loadURL('https://translate.google.com.br/')
}
Menu.setApplicationMenu(null)
app.whenReady().then(createWindow)

