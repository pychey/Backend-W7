import { DataTypes } from "sequelize"
import sequelize from "../utils/database.js"

const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
});

export default Class;