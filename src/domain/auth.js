import { signUpStudent, signUpTeacher } from "../repo/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = ({
  accountType,
  fName,
  lName,
  password,
  university,
  email,
  altEmail,
  enrollNo,
  macAddress,
  courses,
}) => {
  return bcrypt.hash(password, 10).then((hash) => {
    password = hash;
    const signUpPromise =
      accountType === "STUDENT"
        ? signUpStudent({
            fName,
            lName,
            password,
            university,
            email,
            altEmail,
            enrollNo,
            macAddress,
            courses,
          })
        : signUpTeacher({
            fName,
            lName,
            password,
            university,
            courses,
            email,
          });

    return signUpPromise.then((response) => {
      if (response === null)
        return { message: "There was some error, please try again later" };
      const token = jwt.sign(response, process.env.JWT_SECRET, {
        expiresIn: 15 * 60,
      });
      return { token };
    });
  });
};
