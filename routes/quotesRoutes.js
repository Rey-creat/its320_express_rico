import { createUser } from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.post('/create', createUser);

router.get('/', (req, res) => {
    res.send('Hello from Users Route');
});

export default router;