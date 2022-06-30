const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer:  {
    ...ipcRenderer,
    on: (eventName, fn) => {
    ipcRenderer.on(eventName, (event, ...args) => fn(event, ...args));
  }}
});
