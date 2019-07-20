import uuid from "uuid/v4";

type Options = {
  type?: string;
  task?: string;
  id?: string;
  newTask?: string;
};

type Todos = {
  id: string;
  task: string;
  completed: boolean;
};

const reducer = (state: Todos[], action: Options) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter((todo: any) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo: any) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return state.map((todo: any) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};

export default reducer;
