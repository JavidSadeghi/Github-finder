import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <div className='col-3'>
      <div className='card my-1' >
        <div className='card-body text-center'>
          <img
            className='card-img-top rounded-circle'
            style={{ width: '150px' }}
            src={user.avatar_url}
            alt='User-Pic'
          />
          <h4 className='card-title'>{user.login}</h4>
          <Link to={`/user/${user.login}`} className='btn btn-primary'>
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
