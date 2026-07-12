"use client";
import { useState } from "react";
import { createHabit } from "@/lib/actions";

export default function AddHabitForm() {
  const [habitName, setHabitName] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    const result = await createHabit(habitName);
    if (!result?.success) {
      setError(result.errors.fieldErrors.title);
    } else {
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
