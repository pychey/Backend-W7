import { DataTypes } from "sequelize"
import sequelize from "../utils/database.js"

const AttendanceRecord = sequelize.define('AttendanceRecord', {
    date: DataTypes.DATEONLY,
    attendance: DataTypes.STRING,
});

export default AttendanceRecord;