import { Header } from "@/components/Header/Header";
import HabitList from "./HabitList";
import { HABIT } from "@/lib/mockData";
export default function Home() {
  return (
    <>
      <Header />

      <HabitList habits={HABIT} />
    </>
  );
}
