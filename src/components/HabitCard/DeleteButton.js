"use client";

import { deleteHabit } from "@/lib/actions";
import { startTransition } from "react";
import styles from "./DeleteButton.module.css";
export default function DeleteButton({ habitId, deleteFunction }) {
  return (
    <button
      className={styles.deleteButton}
      onClick={() => {
        startTransition(() => {
          deleteFunction();
          deleteHabit(habitId);
        });
      }}
    >
      [DEL]
    </button>
  );
}
