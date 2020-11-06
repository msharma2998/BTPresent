import { Router } from "express";
const router = Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
});

router.post("/signup", (req, res) => {});

export default router;
