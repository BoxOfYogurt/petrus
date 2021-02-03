import { types } from "util";

export type EnterTypes = {
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserType = {
  username: string;
  password: string;
};
