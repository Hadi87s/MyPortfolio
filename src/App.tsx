import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen theme-transition
      ${theme === 'dark' 
        ? 'bg-theme-dark text-gray-100' 
        : 'bg-theme-light text-gray-900'
      }`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;