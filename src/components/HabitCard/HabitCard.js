import Link from "next/link";
import CompletionCheckbox from "./CompletionCheckbox";
import DeleteButton from "./DeleteButton";
import { calculateStreak } from "@/lib/habits";
export default function HabitCard({ habit, deleteFunction }) {
  const streak = calculateStreak(habit.id);
  return (
    <>
      <div>{habit.title}</div>
      <CompletionCheckbox habitId={habit.id} />
      <DeleteButton habitId={habit.id} deleteFunction={deleteFunction} />
      <Link href={`/habits/${habit.id}/edit`}>Modify habit</Link>
      {streak}
    </>
  );
}
