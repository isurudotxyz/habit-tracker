import { getHabitById } from "@/lib/habits";
import EditHabitForm from "../../../../components/HabitCard/EditHabitForm";

export default async function EditHabitPage({ params }) {
  const resolvedParams = await params;

  const habit = getHabitById(resolvedParams.id);
  return <EditHabitForm habitId={habit.id} title={habit.title} />;
}
