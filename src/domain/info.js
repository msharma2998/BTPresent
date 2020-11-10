import { getUniversitiesFromDb, getAllCoursesFromDb } from "../repo/info";
export const getAllUniversities = () => {
  return getUniversitiesFromDb().then((universities) => {
    console.log(universities);
    if (universities == null) return [];

    return universities.map((university) => ({
      id: university._id,
      name: university.name,
    }));
  });
};

export const getAllCourses = (university) => {
  return getAllCoursesFromDb(university).then((courses) => {
    if (courses == null) return [];
    return courses.map((course) => ({
      id: course._id,
      name: course.courseName,
    }));
  });
};
