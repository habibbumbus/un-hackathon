import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NotificationsPanel from './components/NotificationsPanel';
import LandingPage from './pages/LandingPage';
import ClinicsPage from './pages/ClinicsPage';
import TriagePage from './pages/TriagePage';
import BookingPage from './pages/BookingPage';
import QueuePage from './pages/QueuePage';
import ReportPage from './pages/ReportPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/triage" element={<TriagePage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/queue" element={<QueuePage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
      <div className="lg:hidden">
        <NotificationsPanel />
      </div>
    </Layout>
  );
};

export default App;