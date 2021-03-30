import React, { useReducer, useCallback } from 'react';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

const Application = () => {
  const [grudges, dispatch ]= useReducer(reducer, initialState);

  const addGrudge =  useCallback(({ person, reason}) => {
    dispatch({ 
      type:GRUDGE_ADD,
      payload: {
        person, reason, 
        forgiven:false, 
        id:id()
      }
    });
   },
   [dispatch]);

  const toggleForgiveness = useCallback(id =>{
    dispatch ({ 
      type: GRUDGE_FORGIVE, 
      payload: { id }
    })
  }, 
  [dispatch]
  );



  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness}/>
    </div>
  );
};

export default Application;
