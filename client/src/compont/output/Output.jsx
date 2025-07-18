import React from 'react';
import { useAppContext } from '../../Context/AppContext';

function OutputModal({ onClose }) {
  const { userInput, output } = useAppContext();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[95%] max-w-5xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        <h3 className="text-lg font-semibold mb-4 text-gray-800">Program Result</h3>

        {/* Split view */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input */}
          <div>
            <h4 className="text-md font-semibold text-gray-700 mb-1">Custom Input</h4>
            <pre className="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap min-h-[100px]">
              {userInput || 'No input provided'}
            </pre>
          </div>

          {/* Output */}
          <div>
            <h4 className="text-md font-semibold text-gray-700 mb-1">Output</h4>
            <pre className="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap min-h-[100px]">
              {output || 'No output generated'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutputModal;
