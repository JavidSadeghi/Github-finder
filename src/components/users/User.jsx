import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../context/github/githubContext';

 const User = ({ match}) => {
  const githubContext = useContext(GithubContext);

  const { user, getUser, loading, getUserRepos } = githubContext;


  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      blog,
    } = user;

    if (loading) {
      return (
        <>
          <div className='container'>
            <div className='row mt-5 justify-content-center'>
              <Spinner />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <Fragment>
          <div className='container'>
            <div className='mt-3'>
              <Link to='/' className='btn btn-secondary'>
                Back to search
              </Link>
              <label
                className='mx-3 ml-4 border-bottom'
                style={{ padding: '6px 0px' }}
              >
                Hireable:{' '}
                {hireable ? (
                  <i className='fas fa-check text-success' />
                ) : (
                  <i className='fas fa-times-circle text-danger' />
                )}
              </label>
            </div>
            <div className='card grid-2'>
              <div className='row'>
                <div className='col-4 text-center'>
                  <img
                    className='card-img-top rounded-circle mt-3'
                    src={avatar_url}
                    alt='UserImage'
                    style={{ width: '150px' }}
                  />
                  <h4 className='card-title'>{name}</h4>
                  <p className='card-text mb-3'>Loacation: {location}</p>
                </div>
                <div className='col col-lg-6'>
                  {bio && (
                    <Fragment>
                      <h5 className='mt-4'>Bio: </h5>
                      <p>{bio}</p>
                      <a href={html_url} className='btn btn-dark'>
                        Visit Github Profile
                      </a>
                    </Fragment>
                  )}
                  <ul>
                    {login && (
                      <Fragment>
                        <li>
                          <strong>Username: </strong>
                          {login}
                        </li>
                      </Fragment>
                    )}
                    {company && (
                      <Fragment>
                        <li>
                          <strong>Company: </strong>
                          {company}
                        </li>
                      </Fragment>
                    )}

                    {blog && (
                      <Fragment>
                        <li>
                          <strong>Website: </strong>
                          {blog}
                        </li>
                      </Fragment>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className='card mt-1 text-center'>
              <div className='card-body'>
                <span className='badge badge-success p-2 mr-1'>
                  Followers: {followers}
                </span>
                <span className='badge badge-secondary p-2 mr-1'>
                  Following: {following}
                </span>
                <span className='badge badge-info p-2 mr-1'>
                  Public Repos: {public_repos}
                </span>
                <span className='badge badge-dark p-2 mr-1'>
                  Public Gists: {public_gists}
                </span>
              </div>
            </div>

            <Repos />
          </div>
        </Fragment>
      );
    }
}


export default User;
