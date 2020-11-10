import mongoose from "mongoose";
import { University, Course } from "./models";

export const getUniversitiesFromDb = () => {
  return University.find({})
    .then((universities) => {
      return universities;
    })
    .catch((err) => {
      return null;
    });
};

export const getAllCoursesFromDb = (university) => {
  return Course.find({ univId: mongoose.Types.ObjectId(university) })
    .then((courses) => courses)
    .catch((err) => {
      console.log(err);
      return null;
    });
};
