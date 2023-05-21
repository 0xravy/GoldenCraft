"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const Init_1 = __importDefault(require("./Init"));
if (require("electron-squirrel-startup")) {
    electron_1.app.quit();
}
electron_1.app.on("ready", () => {
    new Init_1.default();
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
