"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTodo = exports.editTodo = exports.insertTodo = exports.fetchAll = void 0;
const prismaService_1 = require("./prismaService");
// GET /tasks - Fetch all tasks
const fetchAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prismaService_1.prisma.todo.findMany();
    }
    catch (error) {
        return error;
    }
});
exports.fetchAll = fetchAll;
const insertTodo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = Object.assign(Object.assign({}, payload), { completed: false });
    try {
        return yield prismaService_1.prisma.todo.create({
            data: newTodo,
        });
    }
    catch (error) {
        return error;
    }
});
exports.insertTodo = insertTodo;
const editTodo = (todoId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, color, completed } = payload;
    try {
        const updatedTodo = yield prismaService_1.prisma.todo.update({
            where: { id: Number(todoId) },
            data: { title, color, completed },
        });
        return updatedTodo;
    }
    catch (error) {
        return error;
    }
});
exports.editTodo = editTodo;
const removeTodo = (todoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prismaService_1.prisma.todo.delete({
            where: { id: Number(todoId) },
        });
    }
    catch (error) {
        return error;
    }
});
exports.removeTodo = removeTodo;
//# sourceMappingURL=todosService.js.map