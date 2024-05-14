import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Layout/Header';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div style={{backgroundColor: "black", color: "grey"}}>
      <Header />
      <div className='px-4'>
        <Counter/>
      </div>
  </div>

);

