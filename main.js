const { app, BrowserWindow, Menu } = require('electron');
require('electron-reloader')(module);

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  Menu.setApplicationMenu(null);
  win.maximize();
  // the minimum size of the window is 800x600
  win.setMinimumSize(520, 600);
  win.loadFile('views/index.html');
}

app.whenReady().then(()=>{
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


