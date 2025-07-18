// src/compont/codeEditor/CodeEditor.js
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useAppContext } from '../../Context/AppContext';
import OutputModal from '../output/Output';
import axios from 'axios';

function CodeEditor() {

    const {
        selectedLanguage,
        code,
        setCode,
        setOutput,
        loading,
        setLoading,
        themeMode,
        setThemeMode,
        codeTemplate,
        url,
        userInput,
    } = useAppContext();


    const [showModal, setShowModal] = useState(false);

    const [fontSize, setFontSize] = useState(14);

    if (!selectedLanguage) {
        return <h2 className="text-red-600 text-xl">No language selected.</h2>;
    }

    const handleRun = async () => {
        setLoading(true); // start loading
        try {
            const response = await axios.post(url + '/user/getResult', {
                language: selectedLanguage,
                code,
                userInput
            })

            if (response.status === 200) {
                setOutput(response.data.output);
            } else {
                setOutput('Error running code. Please check console for details.');
                // setOutput(response.message);
                setLoading(false);
                return;
            }
        } catch (error) {
            console.error('Error running code:', error);
            setOutput('Error running code. Please check console for details.');
            setLoading(false);
            return;
        }

        // Simulate delay or call backend
        await new Promise((res) => setTimeout(res, 2000)); // fake delay
        // setOutput(`Output for ${selectedLanguage}:\nHello, World!`);

        setLoading(false); // stop loading
        setShowModal(true); // show modal
    };




    return (
        <div className="flex flex-col flex-1 min-h-0 w-full">
            {/* Header with font size + run button */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-gray-700">
                    Language: {selectedLanguage.toUpperCase()}
                </h2>
                <div className="flex items-center gap-4">

                    <button
                        onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
                        className="px-2 py-1 text-sm border rounded text-gray-700 hover:bg-gray-200"
                    >
                        {themeMode === 'dark' ? '☀️ Light' : '🌙 Dark'}
                    </button>


                    <div className="flex items-center gap-2">
                        <label htmlFor="fontSize" className="text-sm text-gray-600">
                            Font Size:
                        </label>
                        <select
                            id="fontSize"
                            value={fontSize}
                            onChange={(e) => setFontSize(Number(e.target.value))}
                            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
                        >
                            {[12, 14, 16, 18, 20, 22].map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={handleRun}
                        disabled={loading}
                        className={`px-4 py-2 rounded text-white font-medium ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-700'}`}
                    >
                        {loading ? 'Running...' : 'Run Code'}
                    </button>


                </div>
            </div>

            {/* Editor */}
            <div className="flex-1 border rounded overflow-hidden shadow-md">
                <Editor
                    height="500px"
                    theme={themeMode === 'dark' ? 'vs-dark' : 'light'}
                    language={selectedLanguage}
                    value={code}
                    onChange={(value) => setCode(value)}
                    options={{
                        fontSize,
                        minimap: { enabled: false },
                        automaticLayout: true,
                    }}
                />
            </div>
            {showModal && <OutputModal onClose={() => setShowModal(false)} />}

        </div>
    );
}

export default CodeEditor;
