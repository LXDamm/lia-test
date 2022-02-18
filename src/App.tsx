import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getRepos } from './api/api';
import { RepoList } from './components/RepoList';

function App() {
  return (
    <div className="App">
      <RepoList />
    </div>
  );
}

export default App;
