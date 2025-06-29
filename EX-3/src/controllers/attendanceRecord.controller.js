import * as attendanceRecordService from '../services/attendanceRecord.service.js'

export const markAttendance = async (req, res) => {
    const { studentId, date } = req.query;
    const { classId, attendance } = req.body;

    try {
        const attendanceMarked = await attendanceRecordService.markAttendance(date, studentId, classId, attendance);
        res.status(200).json({ data: attendanceMarked });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAttendance = async (req, res) => {
    const { studentId, date } = req.query;

    try {
        const attendance = await attendanceRecordService.getAttendance(date, studentId);
        res.status(200).json({ data: attendance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const listAttendanceForClass = async (req, res) => {
    const classId = req.params.id;

    try {
        const attendances = await attendanceRecordService.listAttendanceForClass( classId );
        res.status(200).json({ data: attendances });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getSummaryAttendanceForStudent = async (req, res) => {
    const studentId = req.params.id;

    try {
        const attendances = await attendanceRecordService.getSummaryAttendanceForStudent( studentId );
        res.status(200).json({ data: attendances });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}