import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  explanations: Record<string, string>;
}

export function CodeBlock({ code, explanations }: CodeBlockProps) {
  const [selectedLine, setSelectedLine] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const hasExplanation = (line: string): boolean => {
    return Object.keys(explanations).includes(line.trim());
  };

  return (
    <div className="my-6 relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative">
        <pre className="bg-[#1a1b26] text-gray-100 p-6 rounded-lg overflow-x-auto shadow-xl">
          <div 
            className="absolute right-4 top-4 z-10"
            onClick={handleCopy}
          >
            <button
              className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white ring-1 ring-white/10 hover:ring-white/20 transition-all duration-200 flex items-center justify-center backdrop-blur-sm"
              title="Copier le code"
            >
              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
          <code className="block font-mono text-[15px] leading-relaxed">
            {code.split('\n').map((line, index) => {
              const hasInfo = hasExplanation(line);
              const isSelected = line.trim() === selectedLine;
              
              return (
                <div
                  key={index}
                  className={`relative flex ${hasInfo ? 'cursor-pointer group/line' : ''}`}
                  onClick={() => hasInfo && setSelectedLine(line.trim())}
                >
                  {hasInfo && (
                    <>
                      <div 
                        className={`absolute left-2 h-full w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400 opacity-50 group-hover/line:opacity-100 transition-all duration-300 ${
                          isSelected && 'animate-pulse opacity-100'
                        }`}
                      />
                      <div 
                        className={`absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-indigo-400 opacity-0 group-hover/line:opacity-100 transition-all duration-300 ${
                          isSelected ? 'opacity-100' : ''
                        }`}
                      />
                    </>
                  )}
                  <div 
                    className={`flex-grow py-1.5 pl-8 transition-all duration-300 rounded-r-lg ${
                      hasInfo
                        ? isSelected
                          ? 'bg-indigo-500/20 translate-x-1'
                          : 'group-hover/line:bg-white/5 group-hover/line:translate-x-1'
                        : ''
                    }`}
                  >
                    {line}
                  </div>
                </div>
              );
            })}
          </code>
        </pre>
      </div>
      {selectedLine && explanations[selectedLine] && (
        <div className="mt-4 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg animate-fadeIn border border-indigo-200/20">
          <p className="text-gray-800 text-lg flex items-center">
            <span className="inline-block w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
              💡
            </span>
            {explanations[selectedLine]}
          </p>
        </div>
      )}
    </div>
  );
}