"use client";
import React from "react";
import { deleteHabit } from "@/lib/actions";

export default function DeleteButton({ habitId }) {
  return <button onClick={() => deleteHabit(habitId)}>X</button>;
}
