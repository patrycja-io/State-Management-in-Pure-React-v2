import React from 'react';
import { render } from 'react-dom';

import Counter from './Counter';

import './index.css';

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter />
      </section>
    </main>
  );
};

render(<Application />, document.getElementById('root'));
