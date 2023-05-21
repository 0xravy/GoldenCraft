import type { BrowserWindow, IpcMainInvokeEvent } from "electron";
import { ipcMain } from "electron";
import Jama from "./Init";

export class Events {
    private events_ram: (() => any)[] = [];
    public main_window: BrowserWindow;
    public jama: Jama;
    constructor(main_window: BrowserWindow, jama: Jama) {
        this.main_window = main_window;
        this.jama = jama;
    }
    public ping(event: IpcMainInvokeEvent, ...args: any[]) {
        return `your args is => ` + args.join(".");
    }
}
