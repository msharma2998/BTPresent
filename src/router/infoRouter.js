import { Router } from "express";
import { getAllUniversities, getAllCourses } from "../domain/info";

const router = Router();

router.get("/universities", (req, res) => {
  getAllUniversities().then((universities) => res.json(universities));
});

router.get("/courses/:university", (req, res) => {
  const { university } = req.params;
  getAllCourses(university).then((courses) => res.json(courses));
});

export default router;
