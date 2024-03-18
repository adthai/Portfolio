import Expertise from './components/expertise/expertise';
import Header from './components/Header/Header';
import Hero from './components/intro/Intro';
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import css from './styles/App.module.scss';
import React from 'react';

const App = () => {
  //don't forget to add font link in index.html
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Expertise/>
    <Work/>
    <Projects/>
    <Footer/>
  </div>
};

export default App;