"use client";
import { useState } from "react";
import { createHabit } from "@/lib/actions";
import { startTransition } from "react";
import styles from "./AddHabitForm.module.css";

export default function AddHabitForm({ setIsModalOpen, addFunction }) {
  const [habitName, setHabitName] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    const result = await createHabit(habitName);
    if (!result?.success) {
      setError(result.errors.fieldErrors.title);
    } else {
      startTransition(() => {
        addFunction({ type: "add", habitName });
      });
      setIsModalOpen(false);
      setError(null);
      setHabitName("");
    }
  }
  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        setIsModalOpen(false);
      }}
    >
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            value={habitName}
            onChange={(e) => {
              setHabitName(e.target.value);
            }}
          />
          <button type="button" onClick={() => setIsModalOpen(false)}>
            [x]
          </button>
          {error && <span className={styles.error}>{error + " "}</span>}

          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
