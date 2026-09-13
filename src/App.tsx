import React, { useState, useEffect } from 'react';
import UserApp from '../user/src/App';
import AdminApp from '../admin/src/App';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Separate URL routing:
  // URL '/admin' or '/admin/*' -> Loads the separate Admin App
  // URL '/' or '/user' or '/user/*' -> Loads the separate User App
  if (currentPath.startsWith('/admin')) {
    return <AdminApp />;
  }

  return <UserApp />;
}
