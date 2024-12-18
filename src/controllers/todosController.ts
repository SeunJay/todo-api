import { Request, Response } from "express";
import {
  editTodo,
  fetchAll,
  insertTodo,
  removeTodo,
} from "../services/todosService";
import { Payload, Todo } from "../types";

export const fetchAllTodos = async (_: Request, res: Response) => {
  try {
    const allTodos = await fetchAll();

    res.status(200).json({
      success: true,
      todos: allTodos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching all todos",
    });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, color } = req.body as Payload;

    if (title === "") {
      res.status(400).json({
        success: false,
        message: "Title field is required",
      });
      return;
    }

    const newTodo = await insertTodo({
      title,
      color,
    });

    res.status(200).json({
      success: true,
      todo: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating new todo",
    });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todoId = id as string;
  try {
    const { title, color, completed } = req.body as Todo;

    const updatedTodo = await editTodo(todoId, {
      title,
      color,
      completed,
    });

    res.status(200).json({
      success: true,
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating todo",
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todoId = id as string;

  try {
    await removeTodo(todoId);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting todo",
    });
  }
};
