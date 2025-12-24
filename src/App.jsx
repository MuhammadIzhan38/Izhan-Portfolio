
import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from './pages/ProjectsPage';
/*import Contact from "./pages/Contact";*/
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer";
import Background3D from "./components/Background3D";

function App() {
  return (
    <div className="app">
      <Background3D /> 
      <Header />
      <main className="main-content">
        <Home />
        <About />
        <ProjectsPage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;