import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
