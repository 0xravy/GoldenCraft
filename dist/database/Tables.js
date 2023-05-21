"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ID_obj = void 0;
const sequelize_1 = require("sequelize");
// import { connection } from "./connection";
exports.ID_obj = {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    type: sequelize_1.DataTypes.INTEGER
};
// export const Users_Table = connection.define("users", {
//     id:ID_obj,
//     user_name:{
//         allowNull:false,
//         type:DataTypes.STRING({
//             length:30
//         })
//     }
// }, {timestamps:false})
