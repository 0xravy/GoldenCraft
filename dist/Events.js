"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
class Events {
    events_ram = [];
    main_window;
    jama;
    constructor(main_window, jama) {
        this.main_window = main_window;
        this.jama = jama;
    }
    ping(event, ...args) {
        return `your args is => ` + args.join(".");
    }
}
exports.Events = Events;
