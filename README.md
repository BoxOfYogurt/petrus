# PETRUS

> a task manager app for managing schedule plans to large projects

## DATABASE TABLES

- [ ] USERS
- [ ] LISTS
- [ ] TASKS

## FIELDS

### USER

- USERNAME
- PASSWORD
- COLOR
- ROLE ? > NOT SURE IF NEEDED
- CATEGORIESS[]
- THEME: | DARK | LIGHT

## CATEGORY

- OWNER
- COLOR
- CATEGORY_NAME
- STATUS: | UNCOMPLETED | COMPLETED
- STYLE: | GEN | ADVANCED
- LISTS[]

### LIST FIELDS

- TITLE
- DESCRIPTION
- CATEGORY
- OWNER
- TASKS[]

### TASK

- OWNER
- TASK_STATUS: | IMPORTANT | WAITING | CANCELED | FINISHED
- DUE_DATE

### PROJECT STRUCTURE

```
export interface TaskInterface {
  id: number;
  task_title: string;
  task_description: string;
  completed: boolean;
  status_level: StatusLevel;
  end_date: Date;
  start_date: Date;
}
export interface SubCategoriesInterface {
  id: number;
  sub_category_title: string;
  tasks: TaskInterface[];
}
export interface ProjectsInterface {
  id: number;
  project_title: string;
  sub_categories: SubCategoriesInterface[];
}
export interface CategoriesInterface {
  id: number;
  color_code: string;
  category_title: string;
  projects: ProjectsInterface[];
}

```
