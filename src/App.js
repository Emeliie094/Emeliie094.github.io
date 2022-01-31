import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import MyWork from './pages/MyWork'
import './styles/App.scss';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Home />
        <About />
        <MyWork />
        <Contact />
      </div>
    </>
  );
}

export default App;


// import header from './images/header.jpg';
// import './styles/App.scss';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     {/* <img src={header} className="App-logo" alt="logo" /> */}
//     //     <nav>
//     //       <Navbar />
//     //     </nav>
//     //     <section>
//     //       <h1>Emelie</h1>
//     //       <p>lorem ipsum</p>
//     //     </section>

//     //   </header>

//     // </div>
//     <>
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="#about" component={About} />
//           {/* <Route path="/blog" component={ } />
//         <Route path="/contact" component={ } /> */}
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;
