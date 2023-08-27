import express from "express";
import {
  changePassword,
  forgetpassword,
  getMyProfile,
  logOut,
  login,
  signup,
  updatePic,
  updateProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/login", login);

router.post("/new", singleUpload, signup);

router.get("/me", isAuthenticated, getMyProfile);

router.get("/logout", isAuthenticated, logOut);

router.put("/updateprofile", isAuthenticated, updateProfile);

router.put("/changepassword", isAuthenticated, changePassword);
router.put("/updatepic", isAuthenticated, updatePic);

router.route("/forgetpassword").post(forgetpassword).put(changePassword);
export default router;
