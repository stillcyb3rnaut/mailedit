"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller"); // Ensure correct path
const router = express_1.default.Router();
// Route for onboarding
router.post("/onboard", (req, res) => {
    (0, auth_controller_1.onboard)(req, res);
});
exports.default = router;
