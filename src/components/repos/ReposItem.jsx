import React from 'react';
import PropTypes from 'prop-types';

const ReposItem = ({ repo }) => {
  return (
    <li className='list-group-item'>
      <a href={repo.html_url} className='py-4'>
        {repo.name}
      </a>
    </li>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default ReposItem;
