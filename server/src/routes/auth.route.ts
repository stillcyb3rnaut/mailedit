import express, { Request, Response } from "express";
import { onboard } from "../controllers/auth.controller"; // Ensure correct path

const router = express.Router();

// Route for onboarding
router.post("/onboard", (req: Request, res: Response) => {
  onboard(req, res);
});

export default router;
