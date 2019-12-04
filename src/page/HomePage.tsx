import React, { useEffect, useContext, Fragment } from 'react';
import './../App.css';
import { Store } from '../store/userReducer';
import { IUser } from '../interfaces/interfaces';
import { followAction, getDataFromURL } from '../actions/Actions';

const HomePage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    state.users.length === 0 && getDataFromURL(dispatch);
  });

  console.log(state);
  return (
    <Fragment>
      <section className="user-layout">
        {state.users.map((user: IUser) => {
          return (
            <section key={user.id} className="user-box">
              <img
                src={user.avatar_url}
                className="round-img"
                alt=""
                style={{ width: '300px' }}
              />

              <section>
                <div>{user.login}</div>
                <div>
                  <a href={user.html_url}>{user.html_url}</a>
                  <button
                    className="followBtn"
                    type="button"
                    onClick={() => followAction(state, dispatch, user)}
                  >
                    {state.follows.find(
                      (follow: IUser) => follow.id === user.id
                    )
                      ? 'Unfollow'
                      : 'Follow'}
                  </button>
                </div>
              </section>
            </section>
          );
        })}
      </section>
    </Fragment>
  );
};

export default HomePage;
