const path = require('path');

const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');

let win;

const createWindow = () => {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: !isDev,
    titleBarStyle: isDev || process.platform !== 'win32' ? 'default' : 'hidden',
    minWidth: 800,
    minHeight: 600,
    show: false,
    titleBarOverlay: {
      height: 50,
      color: '#303030',
      symbolColor: 'white'
    },
    icon: path.join(__dirname, '../public/favicon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }

  win.once('ready-to-show', () => {
    win.show()
  })
}


ipcMain.on('changeTitle', (event, title) => {
  win.setTitle(title ? app.getName() + ' ' + title : app.getName());
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});