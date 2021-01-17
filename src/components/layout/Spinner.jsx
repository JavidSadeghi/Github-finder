import React, { Fragment } from 'react';
// import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      {/* <img src={spinner} alt='Loading...' style={{ width: '200px'}} /> */}
      <div className='d-flex justify-content-center'>
        <div className='spinner-border text-info' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
