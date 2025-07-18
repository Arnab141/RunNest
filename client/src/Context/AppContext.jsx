// src/Context/AppContext.js
import { createContext, useContext, useState } from 'react';
import {
    Code2,
    FileCode,
    BrainCircuit,
    CodeXml,
    TerminalSquare,
    Braces,
    Sparkles,
    FileText,
} from 'lucide-react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [code, setCode] = useState('');
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const [themeMode, setThemeMode] = useState('dark'); // or 'light'
    // const url="http://localhost:3000/api";
    const url="https://runnest.onrender.com/api";



    const AllLanguages = [
        { name: 'C++', id: 'cpp', icon: <Code2 size={18} /> },
        { name: 'Java', id: 'java', icon: <FileCode size={18} /> },
        { name: 'Python', id: 'python', icon: <BrainCircuit size={18} /> },
        { name: 'JavaScript', id: 'javascript', icon: <CodeXml size={18} /> },
        { name: 'C', id: 'c', icon: <TerminalSquare size={18} /> },
        { name: 'Go', id: 'go', icon: <Braces size={18} /> },
        { name: 'Ruby', id: 'ruby', icon: <Sparkles size={18} /> },
        { name: 'Rust', id: 'rust', icon: <FileText size={18} /> },
    ];

    const codeTemplate = {
        cpp: `
#include<iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    // Write your code here

    return 0;
}
  `,
        java: `
import java.util.*;
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        // Write your code here

    }
}
  `,
        python: `
print("Hello, World!")
# Write your code here
`,
        javascript: `
console.log("Hello, World!");
// Write your code here
`,
        c: `
#include<stdio.h>

int main() {
    printf("Hello, World!\\n");
    // Write your code here

    return 0;
}
  `,
        go: `
package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
    // Write your code here

}
  `,
        ruby: `
puts "Hello, World!"
# Write your code here

`,
        rust: `
fn main() {
    println!("Hello, World!");
    // Write your code here

}
  `,
    };


    const value = {
        selectedLanguage,
        setSelectedLanguage,
        code,
        setCode,
        codeTemplate,
        userInput,
        setUserInput,
        AllLanguages,
        output,
        setOutput,
        loading,
        setLoading,
        themeMode,
        setThemeMode,
        url
    };


    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
