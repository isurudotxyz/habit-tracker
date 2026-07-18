import EditHabitForm from "@/components/HabitCard/EditHabitForm";
import { useState } from "react";
import styles from "./EditButton.module.css";

export default function EditButton({ habitId, title }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.editButton}
        onClick={() => setIsEditModalOpen(true)}
      >
        [EDIT →]
      </button>

      {isEditModalOpen && (
        <EditHabitForm
          title={title}
          habitId={habitId}
          setIsEditModalOpen={setIsEditModalOpen}
        ></EditHabitForm>
      )}
    </>
  );
}
