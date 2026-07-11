"use client";

import { deleteHabit } from "@/lib/actions";
import { startTransition } from "react";

export default function DeleteButton({ habitId, deleteFunction }) {
  return (
    <button
      onClick={() => {
        startTransition(() => {
          deleteFunction();
          deleteHabit(habitId);
        });
      }}
    >
      X
    </button>
  );
}
