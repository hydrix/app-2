import { Button } from "@/components/ui/button";
import { Todo } from "@/types/todo";
import { X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
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
  return (
    <li className="flex justify-between items-center">
      <label className="flex gap-4 items-center">
        <Switch defaultChecked={todo.checked} />
        {todo.title}
      </label>
      <Button variant="outline" onClick={handleDelete}>
        <X />
      </Button>
    </li>
  );
};
