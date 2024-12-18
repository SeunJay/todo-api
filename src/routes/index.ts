import express from "express";
const router = express.Router();

import todoRouter from "./todos";

router.use("/tasks", todoRouter);

export default router;
