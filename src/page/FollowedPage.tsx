import React, { useContext, Fragment } from 'react';
import './../App.css';
import { Store } from '../store/userReducer';
import { IUser } from '../interfaces/interfaces';
import { followAction } from '../actions/Actions';

const FollowedPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  if (state.follows.length === 0) {
    return (
      <body>
        <div className="reminder">
          <div className="reminder-sigh">Oops...Nobody here</div>
          Please follow the user in the Home Page
        </div>
      </body>
    );
  } else {
    return (
      <Fragment>
        <section className="follower-layout">
          {state.follows.map((follow: IUser) => {
            return (
              <section key={follow.id} className="user-box">
                <img
                  src={follow.avatar_url}
                  className="round-img"
                  alt=""
                  style={{ width: '300px' }}
                />

                <section>
                  <div>{follow.login}</div>
                  <div>
                    <a href={follow.html_url}>{follow.html_url}</a>
                    <button
                      className="followBtn"
                      type="button"
                      onClick={() => followAction(state, dispatch, follow)}
                    >
                      {state.follows.find(
                        (followed: IUser) => followed.id === follow.id
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
  }
};

export default FollowedPage;
