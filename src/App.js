import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/Hero';
import Logo from './components/Logo/Logo';
import Search from './components/Search/Search';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
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
