import React from 'react';

function InputField({ label, value, onChange, name, placeholder, type = 'text' }) {

    
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full min-h-[120px] p-3 border border-gray-300 rounded-md shadow-sm resize-y focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
      />
    </div>
  );
}

export default InputField;
