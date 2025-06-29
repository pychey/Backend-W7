import AttendanceRecord from "./models/attendanceRecord.js";

export default async function insertSampleData() {
    await Student.bulkCreate([
        { name: "Sophea" },
        { name: "Vuthy" },
        { name: "Chantha" },
    ]);

    await Class.bulkCreate([
        { name: "Math" },
        { name: "Science" },
    ]);

    await AttendanceRecord.bulkCreate([
        { date: '2025-06-27', attendance: "present", StudentId: 1, ClassId: 1 },
        { date: '2025-06-27', attendance: "absent",  StudentId: 2, ClassId: 1 },
        { date: '2025-06-27', attendance: "present", StudentId: 3, ClassId: 2 },
        { date: '2025-06-28', attendance: "present", StudentId: 1, ClassId: 1 },
        { date: '2025-06-28', attendance: "absent",  StudentId: 2, ClassId: 1 },
        { date: '2025-06-28', attendance: "present", StudentId: 3, ClassId: 2 },
    ]);
}