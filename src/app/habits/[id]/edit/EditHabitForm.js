"use client";
import { useState } from "react";
import { updateHabit } from "@/lib/actions";
import { useRouter } from "next/navigation";
export default function EditHabitForm({ habitId, title }) {
  const [newTitle, setNewTitle] = useState(title);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    await updateHabit(habitId, newTitle);
    router.push("/");
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
      <button type="submit">Submit</button>
    </form>
  );
}
