import Student from "../models/student.js";

export const registerStudent = async (req, res) => {
  try {
    const { name, class: studentClass, section, rollNo, events } = req.body;

    if (!name || !phone || !studentClass || !section || !rollNo || !events) {
      return res.status(400).json({
        success: false,
        Message: "ALl fields are required",
      });
    }
    const alreadyExist = await Student.findOne({ rollNo });

    const escapeRoom = events.length >= 2;

    if (alreadyExist) {
      return res.status(400).json({
        success: false,
        message: "student already registered",
      });
    }

    const newStudent = await Student.create({
      name,
      phone,
      class: studentClass,
      section,
      rollNo,
      events,
      escapeRoom,
    });

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      student: newStudent,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      students,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
