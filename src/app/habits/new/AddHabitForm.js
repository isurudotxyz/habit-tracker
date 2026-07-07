"use client";
import { useState } from "react";
import { createHabit } from "@/lib/actions";
export default function AddHabitForm() {
  const [habitName, setHabitName] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    await createHabit(habitName);
    setHabitName("");
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
      <button type="submit">Submit</button>
    </form>
  );
}
