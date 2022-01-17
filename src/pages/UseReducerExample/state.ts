export interface Action {
  type: keyof State;
  value: string;
}

export interface State {
  firstname: string;
  lastname: string;
  email: string;
}

export const initialState: State = {
  firstname: '',
  lastname: '',
  email: '',
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'firstname':
      return { ...state, firstname: action.value };
    case 'lastname':
      return { ...state, lastname: action.value };
    case 'email':
      return { ...state, email: action.value };
    default:
      return state;
  }
};
