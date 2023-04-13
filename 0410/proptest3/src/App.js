import './App.css';
import React from 'react';
import Subject from '../Subject';

function App() {
  const subjects = [{ key: 'js', value: 'Javascript' },{ key: 'java', value: 'Java' }, { key: 'jq', value: 'jQuery' },{ key: 'hc', value: 'HTML/CSS' }, { key: 'spring', value: 'Spring Framework' },];
  return (
    <select name="subject">
      <Subject subjects = {subjects} />
    </select>
  );
}

export default App;
