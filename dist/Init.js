"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const Events_1 = require("./Events");
const connection_1 = require("./database/connection");
class Init {
    main_window;
    constructor() {
        this.main_window = new electron_1.BrowserWindow({
            width: 1024,
            height: 800,
            webPreferences: {
                preload: path_1.default.join(__dirname, "jser.js"),
            },
        });
        connection_1.connection
            .sync({
            force: true,
            logging: false,
        })
            .then(async () => {
            await connection_1.FakeTable.findOne({
                logging: false,
            });
            console.log("database connected");
            await this.load_page("app");
            const events = new Events_1.Events(this.main_window, this);
            const allMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(events));
            allMethods.forEach((func) => {
                if (func == "constructor") {
                    return;
                }
                if (typeof events[func] == "function") {
                    electron_1.ipcMain.handle(func, events[func]);
                }
            });
        })
            .catch((err) => {
            console.log("database error");
            this.main_window.close();
        });
    }
    load_page = async (page) => {
        await this.main_window.loadFile(path_1.default.join(__dirname, `pages/${page}.html`));
    };
}
exports.default = Init;
