"use client";
import { useState } from "react";
import { markHabitComplete } from "@/lib/actions";
import styles from "./CompletionCheckbox.module.css";
export default function CompletionCheckbox({ habitId }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleChange() {
    const newValue = !isChecked;
    setIsChecked(newValue);
    newValue && markHabitComplete(habitId);
  }

  return (
    <label>
      <input
        className={styles.hiddenCheckBox}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className={styles.bracketDisplay}></span>
    </label>
  );
}
