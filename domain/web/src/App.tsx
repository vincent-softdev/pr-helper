import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import './features/header';
import './features/footer';
import HomePage from './pages/home/home';
import PRCalculatorPage from './pages/pr_calculator/pr_calculator';
import Header from './features/header';
import Footer from './features/footer';
import PRNetworkPage from './pages/pr_network/pr_network';
import ProfilePage from './pages/profile/profile';
import DashBoardPage from './pages/dashboard/dashboard';
import AccountPage from './pages/account/account';

function App() {
  return (
    <>
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pr-calculation" element={<PRCalculatorPage />} />
            <Route path="/pr-network" element={<PRNetworkPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboard" element={<DashBoardPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
