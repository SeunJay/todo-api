import { Payload, Todo } from "../types";
import { prisma } from "./prismaService";

// GET /tasks - Fetch all tasks
export const fetchAll = async () => {
  try {
    return await prisma.todo.findMany();
  } catch (error) {
    return error;
  }
};

export const insertTodo = async (payload: Payload) => {
  const newTodo = {
    ...payload,
    completed: false,
  };
  try {
    return await prisma.todo.create({
      data: newTodo,
    });
  } catch (error) {
    return error;
  }
};

export const editTodo = async (todoId: string, payload: Todo) => {
  const { title, color, completed } = payload;
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: Number(todoId) },
      data: { title, color, completed },
    });

    return updatedTodo;
  } catch (error) {
    return error;
  }
};

export const removeTodo = async (todoId: string) => {
  try {
    return await prisma.todo.delete({
      where: { id: Number(todoId) },
    });
  } catch (error) {
    return error;
  }
};
