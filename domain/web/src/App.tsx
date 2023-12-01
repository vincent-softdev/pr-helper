import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import './components/header';
import './components/footer';
import HomePage from './pages/home/home';
import PRCalculatorPage from './pages/pr_calculator/pr_calculator';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link> | <Link to="/pr-calculation">PR Calculation</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pr-calculation" element={<PRCalculatorPage />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
