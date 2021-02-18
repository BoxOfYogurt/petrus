export const colors = {
  Phthalo_Green: "#11270b",
  Space_Cadet: "#21295c",
  Coral: "#ff7f51",
  Steel_Teal: "#5b7b7a",
  Platinum: "#ebebeb",
  Russian_Violet: "#390040",
  Patriarch: "#730071",
  Crimson: "#d7263d",
  Oxford_Blue: "#011638",
  Yellow_Green_Crayola: "#ceec97",
  default: "#21295c",
};

export enum StatusLevel {
  Asap = 0,
  Urgent = 1,
  Important = 2,
  Regular = 3,
  Optional = 4,
}
export interface TaskInterface {
  id: number;
  task_title: string;
  task_description: string;
  completed: boolean;
  status_level: StatusLevel;
  start_date: Date;
  end_date: Date;
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

export const Data: CategoriesInterface[] = [
  {
    id: 1,
    color_code: colors.Oxford_Blue,
    category_title: "Projects",
    projects: [
      {
        id: 21,
        project_title: "Petrus",
        sub_categories: [
          {
            id: 21,
            sub_category_title: "Design",
            tasks: [
              {
                id: 21,
                task_title: "Set Position Absolute",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 22,
                task_title: "Adjust Navigation Margins",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
            ],
          },
          {
            id: 22,
            sub_category_title: "Team members",
            tasks: [
              {
                id: 23,
                task_title: "Hire frontend developer",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Important,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 2),
              },
              {
                id: 24,
                task_title: "Hire Teamleader for marketdivision",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Asap,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 9),
              },
            ],
          },
        ],
      },
      {
        id: 1,
        project_title: "Twitter",
        sub_categories: [
          {
            id: 1,
            sub_category_title: "Design",
            tasks: [
              {
                id: 1,
                task_title: "Set Position Absolute",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 2,
                task_title: "Adjust Navigation Margins",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
            ],
          },
          {
            id: 2,
            sub_category_title: "Team members",
            tasks: [
              {
                id: 3,
                task_title: "Hire frontend developer",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Important,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 2),
              },
              {
                id: 4,
                task_title: "Hire Teamleader for maketdivision",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Asap,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 9),
              },
            ],
          },
        ],
      },
      {
        id: 2,
        project_title: "Facebook",
        sub_categories: [
          {
            id: 3,
            sub_category_title: "Product Planning",
            tasks: [
              {
                id: 5,
                task_title: "Tv marketing",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Optional,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 14),
              },
              {
                id: 6,
                task_title: "Advertisment on live streams",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 2),
              },
            ],
          },
          {
            id: 4,
            sub_category_title: "Team meetings",
            tasks: [
              {
                id: 7,
                task_title: "Overall product handling and shipping",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 8,
                task_title: "The future of Facebook",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 9,
                task_title: "Who to bring in as investor",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 200,
    color_code: colors.Russian_Violet,
    category_title: "Personal",
    projects: [
      {
        id: 10,
        project_title: "Entertainment",
        sub_categories: [
          {
            id: 5,
            sub_category_title: "Netflix",
            tasks: [
              {
                id: 10,
                task_title: "Watch Dead or Alive 2",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 11,
                task_title: "Download ep.5 of Hiyors Bed and Breakfast",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
            ],
          },
          {
            id: 6,
            sub_category_title: "Subscriptions",
            tasks: [
              {
                id: 12,
                task_title: "Delete D-play account",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 13,
                task_title: "Renew Account information on viasat",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 14,
                task_title: "Cancel PornHub account",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    color_code: colors.Coral,
    category_title: "Learning",
    projects: [
      {
        id: 4,
        project_title: "React",
        sub_categories: [
          {
            id: 7,
            sub_category_title: "Youtube videos",
            tasks: [
              {
                id: 15,
                task_title: "Watch Ben Awad type-graphql tutorial",
                task_description: "...A short Description about the task",
                completed: true,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 2, 6),
              },
              {
                id: 16,
                task_title: "Watch John Doe Apollo-Server tutorials",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
            ],
          },
          {
            id: 8,
            sub_category_title: "React-Router-Dom",
            tasks: [
              {
                id: 17,
                task_title: "How to use UseParams()",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 18,
                task_title: "Nested Routes",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 19,
                task_title: "Redirect on invalid credentials / auth route",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
              {
                id: 20,
                task_title: "Redirect after invalid Route / 404 page",
                task_description: "...A short Description about the task",
                completed: false,
                status_level: StatusLevel.Regular,
                start_date: new Date(2021, 2, 5),
                end_date: new Date(2021, 3, 0),
              },
            ],
          },
        ],
      },
    ],
  },
];
