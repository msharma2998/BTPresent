import { signUpStudent, signUpTeacher } from "../repo/auth";
import bcrypt from "bcrypt";

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
      return response;
    });
  });
};
