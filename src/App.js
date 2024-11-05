import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/Hero';
import Logo from './components/Logo/Logo';
import Search from './components/Search/Search';
import './App.css';
import Section from './components/Section/Section';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section title="Top Albums" />
      <Section title="New Albums" />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
