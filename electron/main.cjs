// electron/main.cjs
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
// đầu file electron/main.cjs
if (require('electron-squirrel-startup')) app.quit();

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    backgroundColor: '#0b0b0b',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'), // sửa theo tên file của bạn
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  // link ngoài mở bằng trình duyệt
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  const DEV_URL = process.env.VITE_DEV_SERVER || 'http://localhost:5173';

  const INDEX_HTML = path.join(app.getAppPath(), 'dist', 'index.html');
// hoặc cấu hình Vite build ra dist/renderer nếu bạn muốn giữ đường dẫn cũ


  if (DEV_URL) {
    win.loadURL(DEV_URL);
  } else {
    win.loadFile(INDEX_HTML);
  }

  // tạm mở devtools để soi nếu còn đen
  // win.webContents.openDevTools({ mode: 'detach' });
  win.once('ready-to-show', () => win.show());

  // debug nếu fail load
  win.webContents.on('did-fail-load', (_e, code, desc, url) => {
    console.log('did-fail-load', code, desc, url);
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
