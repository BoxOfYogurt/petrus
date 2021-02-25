# PETRUS

## **Brief introduction...**

This app is considered as a **hobbyproject**.
I am doing this purely out of interest and fun,
but most important as a **learning experience**.

###

**A TaskManager App.**
The application should be easy to navigate.
Should be easy to organize projects in categories --> and tasks in subcategories.
...Notes for quick and easy reminders

## Personal goals:

- Learn how to use the Context API...For global/shared state.
- Hooks...
- Custom Hooks
- Display correct data
- jsonwebtoken/auth/refresh
- Make it beautiful/modern/minimalistic/intuitiv

## Project overview:

### Technologies:

- FRONTEND:

- - TypeScript
- - React
- - Apollo-Client
- - Graphql

- BACKEND:

- - TypeScript
- - Express
- - Apollo-Server
- - Graphql
- - TypeOrm / Mikro-Orm ??
- - PostgreSQL

### Structure

```
+-- USERS []
      +
      +-- CATEGORIES []
      |       |
      |       +-- Customizable Color-code for easy recognizion.
      |       +-- PROJECTS []
      |               |
      |               +-- Progress Circle for each Project.
      |               +-- SUB-CATEGORIES []
      |                       |
      |                       +--TASKS []
      |                             |
      |                             +-- deadline
      |                             +-- importance
      |                             +-- tag?
      +-- NOTES []
              |
              +-- Notes for quick and easy reminders.
```

### Credit

_Icons/SVG from FlatIcon.com_
