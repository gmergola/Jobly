import React from 'react';

//prints appropriate alert based on whichalert prop
//uses object dictionary to find appropriate alert

//TODO: assign actual error as prop so alerts are more
//verbose, less vague

function Alert({errors}){

  return (

    errors.map((err,i) => (
      <div key={i}>{err}</div>
    ))
   
  );
}

export default Alert;