# HABIT TRACKER

> A full-stack habit tracker built with Next.js (App Router), React, and JavaScript.
> Built as a learning project to understand modern web development patterns end to end.

---

## [ STATUS ]

[x] Core CRUD
[x] Streak calculation
[x] Optimistic UI
[x] Zod validation
[x] Error boundaries
[ ] Styling (in progress)
[ ] Real database
[ ] PWA / push notifications

---

## [FEATURES]

- Create, edit, and delete habits
- Mark habits complete for the day
- Automatic streak calculation (consecutive days, with a same-day/previous-day grace period)
- Optimistic UI for instant feedback on create and delete
- Form validation with Zod, including inline error messages
- Error boundaries for graceful failure handling (e.g. visiting an edit page for a deleted habit)

---

## [ STACK ]

| Layer      | Choice                                                       |
| ---------- | ------------------------------------------------------------ |
| Framework  | Next.js (App Router)                                         |
| UI         | React — Server Components, Client Components, Server Actions |
| Language   | JavaScript                                                   |
| Styling    | CSS Modules                                                  |
| Validation | Zod                                                          |
