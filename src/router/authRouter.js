import { Router } from "express";
import { signUp } from "../domain/auth";
const router = Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
});

router.post("/signup", (req, res) => {
  const {
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
  } = req.body;

  signUp({
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
  }).then((resp) => {
    res.json(resp);
  });
});

export default router;
