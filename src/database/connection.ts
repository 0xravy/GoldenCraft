import { DataTypes, Sequelize } from "sequelize";
import path from "path";
export const connection = new Sequelize(
    "data",
    "comateam",
    "wudfyiqugwyduyqwfudtqwfglidgvkyqtwfdkvcjydqiwfyulvwqdctyd",
    {
        dialect: "sqlite",
        host: path.join(__dirname, `/data.sqlite`),
    }
);

export const ID_obj = {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
};

export const FakeTable = connection.define(
    "fakes",
    {
        id: ID_obj,
    },
    { timestamps: false }
);

export const Users_Table = connection.define(
    "users",
    {
        id: ID_obj,
        name: {
            type: DataTypes.STRING({
                length: 70,
            }),
            allowNull: false,
            unique: true,
        },
        money: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gold: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        f_total: {
            type: DataTypes.STRING({
                length: 11,
            }),
            allowNull: false,
        },
        m_total: {
            type: DataTypes.STRING({
                length: 11,
            }),
            allowNull: false,
        },
    },
    { timestamps: false }
);
