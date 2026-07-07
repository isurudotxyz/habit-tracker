import Link from "next/link";
import CompletionCheckbox from "./CompletionCheckbox";
import DeleteButton from "./DeleteButton";
export default function HabitCard({ habit }) {
  return (
    <>
      <div>{habit.title}</div>
      <CompletionCheckbox habitId={habit.id} />
      <DeleteButton habitId={habit.id} />
      <Link href={`/habits/${habit.id}/edit`}>Modify habit</Link>
    </>
  );
}
