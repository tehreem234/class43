import React from 'react';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import JobList from '../../components/JobList/JobList';
import Footer from '../../components/Footer/Footer';
const App = () => {
  
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <JobList />
      <Footer />
    </div>
  );
};

export default App;
