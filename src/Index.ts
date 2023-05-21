import { app, BrowserWindow } from "electron";
import Init from "./Init";
import { Users_Table } from "./database/connection";

if (require("electron-squirrel-startup")) {
    app.quit();
}

app.on("ready", () => {
    new Init();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
