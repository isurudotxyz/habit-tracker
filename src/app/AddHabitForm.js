"use client";
import { useState } from "react";
import { createHabit } from "@/lib/actions";
import { startTransition } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => {
          setHabitName(e.target.value);
        }}
      />
      {error}

      <button type="submit">Submit</button>
    </form>
  );
}
