"use client";
import { useOptimistic, useState } from "react";
import AddHabitForm from "./AddHabitForm";

import HabitCard from "@/components/HabitCard/HabitCard";

export default function HabitList({ habits }) {
  const [optimisticList, setOptimisticList] = useOptimistic(
    habits,
    habitReducer,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  function habitReducer(currentState, action) {
    if (action.type === "delete") {
      return currentState.filter((habit) => habit.id !== action.habitId);
    }
    if (action.type === "add") {
      return [
        ...currentState,
        {
          id: `habit-id-${action.habitName.replaceAll(" ", "-")}`,
          title: action.habitName,
          createdAt: new Date().toISOString().split("T")[0],
        },
      ];
    }
  }
  return (
    <>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Add Habit
      </button>
      {isModalOpen && (
        <AddHabitForm
          setIsModalOpen={setIsModalOpen}
          addFunction={setOptimisticList}
        />
      )}
      {optimisticList.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          deleteFunction={() =>
            setOptimisticList({ type: "delete", habitId: habit.id })
          }
        />
      ))}
    </>
  );
}
