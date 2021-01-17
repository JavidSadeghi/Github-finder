import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;
  
  if (loading) {
    return (
      <div className='container mt-5 text-center'>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className='container mt-3 bg-light'>
        <div className='row justify-content-center'>
          {users.map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      </div>
    );
  }
};

export default Users;
