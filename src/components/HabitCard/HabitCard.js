import Link from "next/link";
import CompletionCheckbox from "./CompletionCheckbox";
import DeleteButton from "./DeleteButton";
import { calculateStreak } from "@/lib/habits";
import styles from "./HabitCard.module.css";
export default function HabitCard({ habit, deleteFunction }) {
  const streak = calculateStreak(habit.id);
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <CompletionCheckbox habitId={habit.id} />
        <span>{habit.title}</span>
      </div>
      <div className={styles.right}>
        <span className={styles.streak}>streak: {streak}</span>
        <Link className={styles.editLink} href={`/habits/${habit.id}/edit`}>
          [EDIT →]
        </Link>
        <DeleteButton habitId={habit.id} deleteFunction={deleteFunction} />
      </div>
    </div>
  );
}
