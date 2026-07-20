import { Header } from "@/components/Header/Header";
import HabitList from "./HabitList";
import { getAllHabitsWithStreaks, getAllCompletions } from "@/lib/habitQueries";
export default async function Home() {
  const habitsWithStreaks = await getAllHabitsWithStreaks();
  const completions = await getAllCompletions();

  return (
    <>
      <Header />

      <HabitList habits={habitsWithStreaks} completions={completions} />
    </>
  );
}
