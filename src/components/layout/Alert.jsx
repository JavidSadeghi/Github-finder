import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className='container mt-3 mb-2'>
        <div className={`alert alert-${alert.type}`} role='alert'>
          <h4>
            <i className='fal fa-engine-warning'></i> 
            {alert.msg}
          </h4>
        </div>
      </div>
    )
  );
};

export default Alert;
