import express, { json } from "express";
import sequelize from "./utils/database.js";
import insertSampleData from './data.js';
import Student from "./models/student.js";
import Class from "./models/class.js";
import AttendanceRecord from "./models/attendanceRecord.js";
import * as attendanceRecordController from './controllers/attendanceRecord.controller.js';

Student.hasMany(AttendanceRecord);
Class.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Student);
AttendanceRecord.belongsTo(Class);

await sequelize.sync({ force: true });

await insertSampleData();

const app = express();

app.use(json());

app.post('/attendance', attendanceRecordController.markAttendance);
app.get('/attendance', attendanceRecordController.getAttendance);
app.get('/class/:id/attendance', attendanceRecordController.listAttendanceForClass);
app.get('/student/:id/attendance', attendanceRecordController.getSummaryAttendanceForStudent);

app.listen(5001, () => {
    console.log(`Server is running on http://localhost:5001`);
})