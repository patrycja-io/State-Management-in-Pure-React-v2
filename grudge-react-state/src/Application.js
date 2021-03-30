import React, { useReducer } from 'react';

import id from 'uuid/v4';
import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const reducer = (state, action) => {
 return state; 
};

const Application = () => {
  const [grudges, dispatch ]= useReducer(reducer, initialState);

  const addGrudge = grudge => {
    grudge.id = id();
    grudge.forgiven = false;

  };

  const toggleForgiveness = id => {
  };

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;
