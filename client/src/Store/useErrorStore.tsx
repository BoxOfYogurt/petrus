import React, { createContext, useContext, useReducer } from "react";

enum ActionType {
  SET_LOGIN_ERROR = "SET_LOGIN_ERROR",
  SET_REGISTER_ERROR = "SET_REGISTER_ERROR",
}

type ErrorTypes = {
  field: string;
  message: string;
  code: number;
  stringCode: string;
};
interface IAction {
  type: ActionType;
  loginError?: ErrorTypes[] | null;
  registerError?: ErrorTypes[] | null;
}
interface IState {
  login: ErrorTypes[] | null;
  register: ErrorTypes[] | null;
}

interface ErrorContextInterface {
  errorStore: IState;
  errorDispatch: React.Dispatch<IAction>;
}

const initialValue: IState = {
  login: null,
  register: null,
};
const ErrorContext = createContext<ErrorContextInterface>(
  {} as ErrorContextInterface
);

interface ErrorProviderInterface {
  children: React.ReactNode;
}

export const ErrorProvider = ({ children }: ErrorProviderInterface) => {
  const Reducer: React.Reducer<IState, IAction> = (state, action) => {
    switch (action.type) {
      case ActionType.SET_LOGIN_ERROR:
        return {
          ...state,
          loginError: action.loginError,
        };
      case ActionType.SET_REGISTER_ERROR:
        return {
          ...state,
          registerError: action.registerError,
        };
      default:
        return state;
    }
  };
  const [errorStore, errorDispatch] = useReducer<
    React.Reducer<IState, IAction>
  >(Reducer, initialValue);

  return (
    <ErrorContext.Provider
      value={{ errorStore, errorDispatch }}
      children={children}
    />
  );
};

export const useErrorStore = () => useContext(ErrorContext);
