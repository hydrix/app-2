import { NextRequest, NextResponse } from "next/server";
import { todos, Todo } from "../store";

type Params = { params: Promise<{ id: string }> };

export const PUT = async (req: NextRequest, { params }: Params) => {
  const { id } = await params;
  const todo = todos.find((t: Todo) => t.id === id);
  if (!todo)
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });

  const { title, checked } = await req.json();
  if (title !== undefined) todo.title = title;
  if (checked !== undefined) todo.checked = checked;

  return NextResponse.json(todo);
};

export const PATCH = async (req: NextRequest, { params }: Params) => {
  const { id } = await params;
  const todo = todos.find((t: Todo) => t.id === id);
  if (!todo)
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });

  const { title, checked } = await req.json();
  if (title !== undefined) todo.title = title;
  if (checked !== undefined) todo.checked = checked;

  return NextResponse.json(todo);
};

export const DELETE = async (_req: NextRequest, { params }: Params) => {
  const { id } = await params;
  const index = todos.findIndex((t: Todo) => t.id === id);
  if (index === -1)
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });

  const [deleted] = todos.splice(index, 1);
  return NextResponse.json(deleted);
};
