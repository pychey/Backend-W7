import { DataTypes } from "sequelize"
import sequelize from "../utils/database.js"

const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
});

export default Student;