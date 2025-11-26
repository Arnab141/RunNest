// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './compont/sidebar/Sidebar';
import CodeEditor from './compont/codeEditor/CodeEditor';
import InputField from './compont/input/InputField';
import { useAppContext } from './Context/AppContext';

function AppRoutes() {
  const {
    setSelectedLanguage,
    code,
    setCode,
    codeTemplate,
    selectedLanguage,
    userInput,
    setUserInput,
  } = useAppContext();
  const location = useLocation();

  // useEffect(() => {//for checking then current language and code and other
  //   console.log('Current language:', selectedLanguage);
  //   console.log('Code template:', code);
  // }, [location.pathname, codeTemplate, setCode, setSelectedLanguage]);

  useEffect(() => {
    const langId = location.pathname.slice(1);
    if (codeTemplate[langId]) {
      setSelectedLanguage(langId);
      setCode(codeTemplate[langId]);
    }
  }, [location.pathname]);

  return (
    <main className="flex-1 p-6 overflow-auto bg-white shadow-inner">
     <h1 className="text-3xl font-extrabold text-cyan-700 mb-4 tracking-wide">RunNest</h1>
      <Routes>
        <Route path="/" element={<h2 className="text-2xl text-gray-800">Select a language to begin</h2>} />
        <Route path="/:language" element={<CodeEditor />} />
      </Routes>
      {selectedLanguage && (
        <div className="mt-6">
          <InputField
            label="Custom Input"
            name="userInput"
            placeholder="Enter input for your program"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
      )}
    </main>
  );
}

function App() {
  const { loading } = useAppContext();

  return (
    <Router>
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div className="flex min-h-screen bg-gray-100 font-sans">
        <Sidebar />
        <AppRoutes />
        <footer class=" py-4 bg-gray-900 text-white text-sm">© 2025 Arnab Pramanik. All rights reserved.</footer>
      </div>
    </Router>
  );
}

export default App;
