import express from "express";
import { getUser } from "../controllers/general.js";

const router = express.Router();
console.log("ROUTES GENERAL");
router.get("/user/:id", getUser);

export default router;
