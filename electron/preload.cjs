// electron/preload.cjs
const { contextBridge, ipcRenderer, shell } = require('electron');

contextBridge.exposeInMainWorld('app', {
  version: () => ipcRenderer.invoke('app:version'),
  openExternal: (url) => shell.openExternal(url),
});
console.log('[preload] loaded'); // giúp bạn nhìn thấy log trong DevTools
