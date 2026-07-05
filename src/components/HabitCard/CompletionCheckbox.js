"use client";
import { useState } from "react";
import { markHabitComplete } from "@/lib/actions";
export default function CompletionCheckbox({ habitId }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleChange() {
    const newValue = !isChecked;
    setIsChecked(newValue);
    newValue && markHabitComplete(habitId);
  }

  return <input type="checkbox" checked={isChecked} onChange={handleChange} />;
}
