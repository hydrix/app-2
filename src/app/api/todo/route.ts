import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { todos } from "./store";

export const GET = () => {
  return NextResponse.json(todos);
};

export const POST = async (req: NextRequest) => {
  const { title } = await req.json();
  const newTodo = { id: nanoid(), title, checked: false };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
};