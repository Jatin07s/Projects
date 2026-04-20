import './App.css';
// css file is global -> you can access anywhere 

import NavBar from './components/NavBar'
import HeroSection from './components/Hero';

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      
    </div>
  );
};

export default App;
