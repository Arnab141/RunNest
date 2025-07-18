const axios = require('axios');

const pistonLanguageMap = {
  cpp: 'cpp',
  java: 'java',
  python: 'python3',
  javascript: 'javascript',
  c: 'c',
  go: 'go',
  ruby: 'ruby',
  rust: 'rust',
};

const fileExtensionMap = {
  cpp: 'cpp',
  java: 'java',
  python: 'py',
  javascript: 'js',
  c: 'c',
  go: 'go',
  ruby: 'rb',
  rust: 'rs',
};

const getResult = async (req, res) => {
  try {
    const { language, code, userInput } = req.body;

    const pistonLang = pistonLanguageMap[language];
    const fileExt = fileExtensionMap[language];

    if (!pistonLang || !fileExt) {
      return res.status(400).json({ error: 'Unsupported language' });
    }

    const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
      language: pistonLang,
      version: '*',
      files: [
        {
          name: `main.${fileExt}`, // ✅ Correct extension
          content: code
        }
      ],
      stdin: userInput
    });

    res.send({
      status: 'success',
      output: response.data.run.output || 'No output returned.',
      stderr: response.data.run.stderr || null,
    });

  } catch (error) {
    console.error('Execution error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getResult };
