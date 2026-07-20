PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_completions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`habit_id` integer NOT NULL,
	`date` text NOT NULL,
	FOREIGN KEY (`habit_id`) REFERENCES `habits`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_completions`("id", "habit_id", "date") SELECT "id", "habit_id", "date" FROM `completions`;--> statement-breakpoint
DROP TABLE `completions`;--> statement-breakpoint
ALTER TABLE `__new_completions` RENAME TO `completions`;--> statement-breakpoint
PRAGMA foreign_keys=ON;