import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Todo } from "@/types/todo";
import { X, Pencil, Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";

export const TodoItem = ({
  todo,
  onDelete,
  onUpdate,
}: {
  todo: Todo;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/todo/${todo.id}`);
      onDelete(todo.id);
      toast.success("Todo-г амжилттай устгалаа");
    } catch {
      toast.error("Todo-г устгахад алдаа гарлаа");
    }
  };

  const handleEdit = async () => {
    if (newTitle.trim() === "") {
      toast.error("Todo хоосон байж болохгүй!");
      return;
    }

    try {
      await axios.put(`/api/todo/${todo.id}`, { title: newTitle });
      onUpdate(todo.id, newTitle);
      toast.success("Todo-г амжилттай заслаа");
      setIsEditing(false);
    } catch {
      toast.error("Todo-г засахад алдаа гарлаа");
    }
  };

  return (
    <li className="flex justify-between items-center gap-2">
      <label className="flex gap-4 items-center w-full">
        <Switch defaultChecked={todo.checked} />
        {isEditing ? (
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full"
          />
        ) : (
          <span>{todo.title}</span>
        )}
      </label>

      <div className="flex justify-end items-center gap-3">
        {isEditing ? (
          <Button variant="outline" onClick={handleEdit}>
            <Check />
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setIsEditing(true)}>
            <Pencil />
          </Button>
        )}
        <Button variant="outline" onClick={handleDelete}>
          <X />
        </Button>
      </div>
    </li>
  );
};
