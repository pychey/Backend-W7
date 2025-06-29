import AttendanceRecord from "../models/attendanceRecord.js"

export const markAttendance = async (date, studentId, classId, attendance) => {
    const record = await AttendanceRecord.create({
        StudentId: studentId,
        ClassId: classId,
        date,
        attendance,
    })
    return record;
}

export const getAttendance = async (date, studentId) => {
    const records = await AttendanceRecord.findAll({
        where: { StudentId: studentId, date }
    })
    return records;
}

export const listAttendanceForClass = async (classId) => {
    const records = await AttendanceRecord.findAll({
        where: { ClassId: classId }
    })
    return records;
}

export const getSummaryAttendanceForStudent = async (studentId) => {
    const records = await AttendanceRecord.findAll({
        where: { StudentId: studentId }
    })
    return records;
}