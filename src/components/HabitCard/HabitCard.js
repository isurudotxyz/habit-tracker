import React from "react";

import CompletionCheckbox from "./CompletionCheckbox";
import DeleteButton from "./DeleteButton";
import { calculateStreak } from "@/lib/habits";
import styles from "./HabitCard.module.css";
import EditButton from "./EditButton";

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
        <EditButton habitId={habit.id} title={habit.title}></EditButton>
        <DeleteButton habitId={habit.id} deleteFunction={deleteFunction} />
      </div>
    </div>
  );
}
