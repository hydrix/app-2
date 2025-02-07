import { Button } from "@/components/ui/button";
import { Todo } from "@/types/todo";
import { X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Pencil } from "lucide-react";
import axios from "axios";

export const TodoItem = ({
  todo,
  onDelete,
}: {
  todo: Todo;
  onDelete: (id: string) => void;
}) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/todo/${todo.id}`);
      onDelete(todo.id);
      toast.success("Todo-г амжилттай устгалаа");
    } catch {
      toast.error("Todo-г устгахад алдаа гарлаа");
    }
  };

const handleEdit = async (updatedTitle: string) => {
  try {
    await axios.put(`/api/todo/${todo.id}`, { title: updatedTitle });
    toast.success("Todo-г амжилттай заслаа");
  } catch {
    toast.error("Todo-г заслахад алдаа гарлаа");
  }
};


  return (
    <li className="flex justify-between items-center">
      <label className="flex gap-4 items-center">
        <Switch defaultChecked={todo.checked} />
        {todo.title}
      </label>
      <div className="flex justify-end items-center gap-3">
        <Button variant="outline" onClick={() => handleEdit(todo.title)}>
          <Pencil />
        </Button>
        <Button variant="outline" onClick={handleDelete}>
          <X />
        </Button>
      </div>
    </li>
  );
};
