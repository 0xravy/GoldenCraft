import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("jser", {
    ping: (...args: any[]) => ipcRenderer.invoke("ping", ...args),
});
