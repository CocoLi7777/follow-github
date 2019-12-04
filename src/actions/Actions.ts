import { IUser, IAction, IState } from '../interfaces/interfaces';
import axios from 'axios';

//This function provides toggle follow action for user
export const followAction = (
  state: IState,
  dispatch: any,
  user: IUser
): IAction => {
  const userIsFollowed = state.follows.includes(user); //ture or fase
  const removeFollowedUser = state.follows.filter(
    (follow: IUser) => user.id !== follow.id
  );
  let dispatchAction: IAction = {
    type: 'ADD-FOLLOW',
    payload: user
  };
  if (userIsFollowed) {
    dispatchAction = {
      type: 'REMOVE-FOLLOW',
      payload: removeFollowedUser
    };
  }
  return dispatch(dispatchAction);
};

//use axios to get json from url and send json to payload
export const getDataFromURL = async (dispatch: any) => {
  const url = 'https://api.github.com/users';
  const res = await axios(url);
  return dispatch({
    type: 'FETCH_DATA',
    payload: res.data
  });
};
