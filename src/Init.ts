import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { Events } from "./Events";
import { FakeTable, connection } from "./database/connection";

export default class Init {
    public main_window: BrowserWindow;
    constructor() {
        this.main_window = new BrowserWindow({
            width: 1024,
            height: 800,
            webPreferences: {
                preload: path.join(__dirname, "jser.js"),
            },
        });
        connection
            .sync({
                force: true,
                logging: false,
            })
            .then(async () => {
                await FakeTable.findOne({
                    logging: false,
                });
                console.log("database connected");
                await this.load_page("app");
                const events = new Events(this.main_window, this);
                const allMethods = Object.getOwnPropertyNames(
                    Object.getPrototypeOf(events)
                );
                allMethods.forEach((func) => {
                    if (func == "constructor") {
                        return;
                    }
                    if (typeof (events as any)[func] == "function") {
                        ipcMain.handle(func, (events as any)[func]);
                    }
                });
            })
            .catch((err) => {
                console.log("database error");
                this.main_window.close();
            });
    }
    public load_page = async (page: PagesNames) => {
        await this.main_window.loadFile(
            path.join(__dirname, `pages/${page}.html`)
        );
    };
}
