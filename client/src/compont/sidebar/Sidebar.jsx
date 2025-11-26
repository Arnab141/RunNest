// src/compont/sidebar/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/AppContext';
import './Sidebar.css'; // Custom styles if needed

function Sidebar() {
  const navigate = useNavigate();
  const {
    AllLanguages,
    selectedLanguage,
    setCode,
    setSelectedLanguage,
    codeTemplate,
  } = useAppContext();

  const handleLanguageClick = (langId) => {
    if (selectedLanguage !== langId) {
      setSelectedLanguage(langId);
      setCode(codeTemplate[langId]);
      navigate(`/${langId}`);
    }
  };

  return (
    <aside className="w-64 bg-gray-900 text-white p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Languages</h2>
      <ul className="space-y-3">
        {AllLanguages.map((lang) => (
          <li
            key={lang.id}
            onClick={() => handleLanguageClick(lang.id)}
            className={`flex items-center gap-2 cursor-pointer transition hover:text-cyan-400 ${
              lang.id === selectedLanguage ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            {lang.icon}
            <span>{lang.name}</span>
          </li>
        ))}
      </ul>
       <footer className="text-center text-xs text-gray-400 border-t border-gray-700 mt-6 pt-3">
        © 2025 Arnab Pramanik
      </footer>
    </aside>
  );
}

export default Sidebar;
