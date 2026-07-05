import CompletionCheckbox from "./CompletionCheckbox";

export default function HabitCard({ habit }) {
  return (
    <>
      <div>{habit.title}</div>
      <CompletionCheckbox habitId={habit.id} />
    </>
  );
}
