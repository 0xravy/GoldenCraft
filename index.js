const { app, BrowserWindow } = require("electron");
// var remote = window.require("electron").remote;
// var electronFs = remote.require("fs");
// var electronDialog = remote.dialog;
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile("index.html");
};

app.whenReady().then(() => {
    createWindow();
});
