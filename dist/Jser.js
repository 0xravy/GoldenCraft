"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("jser", {
    ping: (...args) => electron_1.ipcRenderer.invoke("ping", ...args),
});
