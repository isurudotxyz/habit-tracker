import React from "react";
import CompletionGraph from "../CompletionGraph/CompletionGraph";
import CompletionCheckbox from "./CompletionCheckbox";
import DeleteButton from "./DeleteButton";
import styles from "./HabitCard.module.css";
import EditButton from "./EditButton";

export default function HabitCard({ completions, habit, deleteFunction }) {
  const streak = habit.streak;

  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <CompletionCheckbox habitId={habit.id} />
        <span>{habit.title}</span>
      </div>
      <div className={styles.right}>
        <span className={styles.streak}>streak: {streak}</span>
        <CompletionGraph
          completions={completions}
          habitId={habit.id}
        ></CompletionGraph>
        <EditButton habitId={habit.id} title={habit.title}></EditButton>
        <DeleteButton habitId={habit.id} deleteFunction={deleteFunction} />
      </div>
    </div>
  );
}
