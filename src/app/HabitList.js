"use client";
import { useOptimistic } from "react";

import HabitCard from "@/components/HabitCard/HabitCard";

function updateFunction(currentState, habitIdToDelete) {
  return currentState.filter((habit) => habit.id !== habitIdToDelete);
}
export default function HabitList({ habits }) {
  const [optimisticState, addOptimistic] = useOptimistic(
    habits,
    updateFunction,
  );
  return (
    <>
      {optimisticState.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          deleteFunction={() => addOptimistic(habit.id)}
        />
      ))}
    </>
  );
}
