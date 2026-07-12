"use client";
import { useState } from "react";
import { updateHabit } from "@/lib/actions";
import { useRouter } from "next/navigation";
export default function EditHabitForm({ habitId, title }) {
  const [newTitle, setNewTitle] = useState(title);
  const router = useRouter();
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await updateHabit(habitId, newTitle);
    if (!result.success) {
      setError(result.errors.fieldErrors.title);
    } else {
      setError(null);
      router.push("/");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      {error}
      <button type="submit">Submit</button>
    </form>
  );
}
