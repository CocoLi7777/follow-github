import React, { useReducer } from 'react';
import { IAction, IState } from '../interfaces/interfaces';

const initState: IState = {
  users: [],
  follows: []
};
//create store to have all data stored
export const Store = React.createContext<IState | any>(initState);

function userReducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, users: action.payload };
    case 'ADD-FOLLOW':
      return { ...state, follows: [...state.follows, action.payload] };
    case 'REMOVE-FOLLOW':
      return { ...state, follows: action.payload };
    default:
      return state;
  }
}
export default userReducer;

//provide all components to access the store
export function StoreProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = useReducer(userReducer, initState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
