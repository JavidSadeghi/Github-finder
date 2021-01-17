import React, {useState, useContext} from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

const SearchUsers = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { searchUsers, clearSearch, users } = githubContext;
  const { showAlert } = alertContext;

  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      showAlert(' Please enter something to search...', 'danger');
    }else{
      searchUsers(text);
      setText('');
    }

  };

  const clearHandler = (e) => {
    e.preventDefault();
    clearSearch();
  };


    return (
      <div className='container mt-3'>
        <form onSubmit={onSubmitHandler}>
          <div className='form-group'>
            <input
              type='text'
              name='text'
              className='form-control'
              placeholder='Search Users ...'
              value={text}
              onChange={onChangeHandler}
            />
            <input
              type='submit'
              value='Search Users'
              className='btn btn-block btn-dark mt-3 mb-3'
            />
          </div>
        </form>
        {users.length > 0 && (
          <button
            className='btn btn-secondary btn-lg btn-block'
            onClick={clearHandler}
          >
            Clear Search
          </button>
        )}
      </div>
    );

}

export default SearchUsers;
