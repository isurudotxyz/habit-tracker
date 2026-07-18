"use client";
import { useState } from "react";
import { updateHabit } from "@/lib/actions";
import styles from "./EditHabitForm.module.css";
// import { useRouter } from "next/navigation";
export default function EditHabitForm({ habitId, title, setIsEditModalOpen }) {
  const [newTitle, setNewTitle] = useState(title);
  // const router = useRouter();
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await updateHabit(habitId, newTitle);
    if (!result.success) {
      setError(result.errors.fieldErrors.title);
    } else {
      setError(null);
      // router.push("/");
      setIsEditModalOpen(false);
    }
  }

  return (
    <div className={styles.overlay} onClick={() => setIsEditModalOpen(false)}>
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
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
          <button type="button" onClick={() => setIsEditModalOpen(false)}>
            [x]
          </button>
          {error && <span className={styles.error}>{error}</span>}
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
