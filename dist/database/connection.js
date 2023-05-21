"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users_Table = exports.FakeTable = exports.ID_obj = exports.connection = void 0;
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
exports.connection = new sequelize_1.Sequelize("data", "comateam", "wudfyiqugwyduyqwfudtqwfglidgvkyqtwfdkvcjydqiwfyulvwqdctyd", {
    dialect: "sqlite",
    host: path_1.default.join(__dirname, `/data.sqlite`),
});
exports.ID_obj = {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    type: sequelize_1.DataTypes.INTEGER,
};
exports.FakeTable = exports.connection.define("fakes", {
    id: exports.ID_obj,
}, { timestamps: false });
exports.Users_Table = exports.connection.define("users", {
    id: exports.ID_obj,
    name: {
        type: sequelize_1.DataTypes.STRING({
            length: 70,
        }),
        allowNull: false,
        unique: true,
    },
    money: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    gold: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    f_total: {
        type: sequelize_1.DataTypes.STRING({
            length: 11,
        }),
        allowNull: false,
    },
    m_total: {
        type: sequelize_1.DataTypes.STRING({
            length: 11,
        }),
        allowNull: false,
    },
}, { timestamps: false });
