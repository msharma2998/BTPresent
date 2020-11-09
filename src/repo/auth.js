import { Student, Teacher } from "./models";
export const signUpStudent = ({
  fName,
  lName,
  email,
  altEmail,
  enrollNo,
  university,
  macAddress,
  password,
  courses,
}) => {
  return Student.create({
    firstname: fName,
    lastname: lName,
    email,
    alternateEmail: altEmail,
    enrollmentNumber: enrollNo,
    MACaddress: macAddress,
    password: password,
    univID: university,
    courses,
  })
    .then((student) => ({
      universityId: student.univID,
      enrollmentNo: student.enrollmentNumber,
    }))
    .catch((err) => {
      return null;
    });
};

export const signUpTeacher = ({
  fName,
  lName,
  email,
  university,
  password,
  courses,
}) => {
  return Teacher.create({
    firstname: fName,
    lastName: lName,
    email,
    password,
    courses,
    univID: university,
  })
    .then((teacher) => ({
      universityId: teacher.univID,
      id: teacher._id,
    }))
    .catch((err) => null);
};
