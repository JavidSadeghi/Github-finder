import React, { Fragment, useContext } from 'react';
import RepoItem from './ReposItem';
import GithubContext from '../context/github/githubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;
  return (
    <Fragment>
      <ul className='list-group mt-2'>
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </ul>
    </Fragment>
  );
};


export default Repos;
