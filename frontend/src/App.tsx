import { Outlet } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Context/useAuth';
import { useEffect, useState } from 'react';
import ColdStartLoader from './Components/ColdStartLoader/ColdStartLoader';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [isReady, setIsReady] = useState(false);

  // Only on free tier hosting
  useEffect(() => {
    const wakeServer = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => {
          controller.abort();
        }, 5000); // 5 second timeout

        await fetch(`${API_URL}/health`, {
          signal: controller.signal,
        });

        clearTimeout(timeout);
        setIsReady(true);
      } catch (error) {
        // Retry after 3 seconds
        setTimeout(wakeServer, 3000);
      }
    };

    wakeServer();
  }, []);

  if (!isReady) {
    return <ColdStartLoader />;
  }

  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
