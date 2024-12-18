import express from "express";
const router = express.Router();

import {
  fetchAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todosController";

router.get("/", fetchAllTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
