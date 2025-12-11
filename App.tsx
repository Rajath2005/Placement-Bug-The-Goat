import React, { useState, useEffect, useRef } from 'react';
import { questions } from './data';
import { Question, LoadingState, CategoryType, GeneratedAnswer } from './types';
import { getAnswerForQuestion } from './services/geminiService';

// --- Components ---

// 1. Sidebar Component
const Sidebar = ({ 
  selectedCategory, 
  onSelectCategory, 
  isOpen, 
  setIsOpen 
}: { 
  selectedCategory: CategoryType; 
  onSelectCategory: (c: CategoryType) => void;
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
}) => {
  const categories: CategoryType[] = ['All', 'Java', 'C++', 'Aptitude', 'Algorithms', 'Data Structures'];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-20 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Sidebar Content */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-200 z-30 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-100">
          <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
            PlacementPrep
          </h1>
          <p className="text-xs text-slate-500 mt-1">AI-Powered Solutions</p>
        </div>
        <nav className="p-4 space-y-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                onSelectCategory(cat);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === cat 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
        
        {/* Footer / Credits */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-slate-100 bg-slate-50/50">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Designed By</p>
           
           <div className="flex flex-col gap-2">
             <a 
               href="https://github.com/Rajath2005" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors group"
             >
               <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-indigo-200 group-hover:text-indigo-500 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
               </div>
               Rajath2005
             </a>
             
             <a 
               href="https://github.com/Binary-Explorers" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors group"
             >
               <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-indigo-200 group-hover:text-indigo-500 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
               </div>
               Binary-Explorers
             </a>
           </div>
        </div>
      </div>
    </>
  );
};

// 2. Code Block Component
const CodeBlock: React.FC<{ language: string; code: string }> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Determine correct Prism class
  // Added logic for Python and generic 'algorithm' (which often looks like python/pseudocode)
  let prismLang = 'language-none';
  const lowerLang = language.toLowerCase();

  if (lowerLang.includes('java') && !lowerLang.includes('script')) {
    prismLang = 'language-java';
  } else if (lowerLang.includes('c++') || lowerLang.includes('cpp')) {
    prismLang = 'language-cpp';
  } else if (lowerLang === 'c') {
    prismLang = 'language-c';
  } else if (lowerLang.includes('py') || lowerLang.includes('python')) {
    prismLang = 'language-python';
  } else if (lowerLang.includes('algo') || lowerLang.includes('pseudo')) {
    // Algorithms/Pseudocode often look best with Python highlighting due to lack of braces
    prismLang = 'language-python'; 
  }

  // Formatting the display language label
  const displayLang = 
    lowerLang.includes('cpp') || lowerLang.includes('c++') ? 'C++' :
    lowerLang.includes('py') ? 'PYTHON' :
    language.toUpperCase() || 'CODE';

  return (
    <div className="my-5 rounded-lg overflow-hidden border border-slate-700 shadow-lg group relative">
      <div className="bg-[#0f172a] px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-slate-400 font-semibold tracking-wider">
            {displayLang}
          </span>
        </div>
        <button 
          onClick={handleCopy}
          className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5 bg-slate-800/50 hover:bg-slate-700 px-2.5 py-1 rounded transition-all"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="bg-[#1e293b] relative group">
        <pre className={`${prismLang} p-4 overflow-x-auto custom-scrollbar text-sm leading-relaxed`}>
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
};

// 3. Answer Display Component
const AnswerView = ({ answer, loading, error }: { answer: GeneratedAnswer | null, loading: boolean, error: string | null }) => {
  
  // Effect to trigger Prism highlighting when content changes
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Prism && answer) {
      // @ts-ignore
      window.Prism.highlightAll();
    }
  }, [answer]);

  if (loading) {
    return (
      <div className="mt-4 p-8 bg-slate-50/50 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-white p-3 rounded-full border border-indigo-100 shadow-sm">
             <svg className="w-6 h-6 text-indigo-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
          </div>
        </div>
        
        <div className="flex items-center gap-1 mb-2">
           <span className="text-sm font-semibold text-slate-700">AI is crafting your solution</span>
           <span className="flex gap-0.5 mt-1">
             <span className="w-1 h-1 bg-slate-400 rounded-full animate-[bounce_1s_infinite_0ms]"></span>
             <span className="w-1 h-1 bg-slate-400 rounded-full animate-[bounce_1s_infinite_200ms]"></span>
             <span className="w-1 h-1 bg-slate-400 rounded-full animate-[bounce_1s_infinite_400ms]"></span>
           </span>
        </div>
        <p className="text-xs text-slate-500 max-w-xs mx-auto">
          Analyzing problem constraints & generating optimized code...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100 flex items-start gap-2">
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        {error}
      </div>
    );
  }

  if (!answer) return null;

  // Format content to separate code blocks from text
  const formatContent = (text: string) => {
    // Regex to split by markdown code blocks: ```lang ... ```
    // Captures the language (optional) and the code
    const parts = text.split(/(```[a-zA-Z]*[\s\S]*?```)/g);
    
    return parts.map((part, index) => {
      // Check if it's a code block
      if (part.startsWith('```')) {
        const match = part.match(/^```([a-zA-Z]*)\n([\s\S]*?)```$/);
        if (match) {
          const language = match[1] || 'text'; // Default to text/none if lang not specified
          const code = match[2];
          return <CodeBlock key={index} language={language} code={code} />;
        }
        // Fallback if regex fails but starts with ticks
        return <CodeBlock key={index} language="text" code={part.replace(/```/g, '')} />;
      }

      // Render Text parts with simple formatting
      if (!part.trim()) return null;

      // Handle bold text **text**
      const withBold = part.split(/(\*\*.*?\*\*)/g).map((subPart, i) => {
          if (subPart.startsWith('**') && subPart.endsWith('**')) {
              return <strong key={i} className="text-slate-900 font-semibold">{subPart.slice(2, -2)}</strong>;
          }
          return subPart;
      });

      return <p key={index} className="mb-3 text-slate-600 leading-relaxed whitespace-pre-wrap">{withBold}</p>;
    });
  };

  return (
    <div className="mt-4 border-t border-slate-100 pt-6 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="prose prose-slate max-w-none text-sm sm:text-base">
        <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
          Solution
        </h3>
        {formatContent(answer.text)}
      </div>
    </div>
  );
};

// 4. Question Card Component
const QuestionCard: React.FC<{ question: Question }> = ({ question }) => {
  const [expanded, setExpanded] = useState(false);
  const [answer, setAnswer] = useState<GeneratedAnswer | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleReveal = async () => {
    if (expanded) {
      setExpanded(false);
      return;
    }

    setExpanded(true);
    
    // Only fetch if we haven't already fetched successfully
    if (status !== LoadingState.SUCCESS) {
      setStatus(LoadingState.LOADING);
      try {
        const result = await getAnswerForQuestion(question.text, question.category);
        setAnswer(result);
        setStatus(LoadingState.SUCCESS);
      } catch (err: any) {
        setErrorMsg(err.message || "Something went wrong");
        setStatus(LoadingState.ERROR);
      }
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const [day, month, year] = dateStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  }

  return (
    <div className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden
      ${expanded ? 'border-indigo-200 shadow-lg ring-1 ring-indigo-50' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'}
    `}>
      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wide border
              ${question.category === 'Java' ? 'bg-orange-50 text-orange-600 border-orange-100' : 
                question.category === 'C++' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                question.category === 'Algorithms' ? 'bg-purple-50 text-purple-600 border-purple-100' :
                'bg-slate-100 text-slate-600 border-slate-200'}`}>
              {question.category}
            </span>
            {question.subcategory && (
               <span className="text-xs text-slate-500 font-medium px-1.5 border-l border-slate-200">
                 {question.subcategory}
               </span>
            )}
          </div>
          
          {question.dateStr && (
            <span className="text-xs text-slate-400 font-mono bg-slate-50 px-2 py-1 rounded border border-slate-100 flex items-center gap-1.5 whitespace-nowrap self-start">
              <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {formatDate(question.dateStr)}
            </span>
          )}
        </div>
        
        <h3 className="text-base sm:text-lg text-slate-800 font-medium mb-3 leading-relaxed">
          {question.text}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-wrap gap-2">
            {question.tags.map(tag => (
              <span key={tag} className="text-[10px] sm:text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                #{tag}
              </span>
            ))}
          </div>
          
          <button 
             onClick={handleReveal}
             className={`text-sm font-semibold flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg
               ${expanded 
                 ? 'bg-indigo-50 text-indigo-600' 
                 : 'text-indigo-600 hover:bg-indigo-50'
               }`}
          >
             {expanded ? 'Close' : 'Solve'}
             <svg className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
             </svg>
          </button>
        </div>

        {expanded && (
          <AnswerView 
            answer={answer} 
            loading={status === LoadingState.LOADING} 
            error={errorMsg}
          />
        )}
      </div>
    </div>
  );
};

// 5. Main App Layout
function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'date-asc' | 'date-desc'>('date-asc');

  // Filter logic
  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory || (selectedCategory === 'Algorithms' && q.category === 'Data Structures'); 
    const matchesSearch = q.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          q.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
      const parseDate = (d?: string) => {
          if (!d) return 0;
          const [day, month, year] = d.split('-').map(Number);
          return new Date(year, month - 1, day).getTime();
      };
      const dA = parseDate(a.dateStr);
      const dB = parseDate(b.dateStr);
      return sortBy === 'date-asc' ? dA - dB : dB - dA;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar Navigation */}
      <Sidebar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 w-full">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 py-3 sm:px-8">
           <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center w-full sm:w-auto gap-3">
                 <button 
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-md"
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                 </button>
                 <div>
                   <h2 className="text-lg font-bold text-slate-800 truncate">
                     {selectedCategory === 'All' ? 'Question Bank' : selectedCategory}
                   </h2>
                   <p className="text-xs text-slate-500 hidden sm:block">Practice problems from Nov 3 - Dec 13</p>
                 </div>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-72 group">
                    <input
                    type="text"
                    placeholder="Search questions or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-lg text-sm transition-all outline-none"
                    />
                    <svg className="absolute left-3 top-2.5 text-slate-400 group-focus-within:text-indigo-500 w-4 h-4 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <button 
                    onClick={() => setSortBy(sortBy === 'date-asc' ? 'date-desc' : 'date-asc')}
                    className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-600 text-xs font-medium transition-colors flex items-center gap-2 shadow-sm"
                    title={sortBy === 'date-asc' ? 'Sorted Oldest to Newest' : 'Sorted Newest to Oldest'}
                >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {sortBy === 'date-asc' 
                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4 4m-4-4v12" style={{transform: 'scaleY(-1)', transformOrigin: 'center'}} />
                      }
                    </svg>
                    <span className="hidden sm:inline">{sortBy === 'date-asc' ? 'Oldest' : 'Newest'}</span>
                </button>
              </div>
           </div>
        </header>

        {/* Content Body */}
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-8">
           {/* Stats */}
           <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
              <p className="text-slate-500">Showing <strong>{filteredQuestions.length}</strong> questions</p>
           </div>

           {/* List */}
           <div className="grid gap-5">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((q) => (
                  <QuestionCard key={q.id} question={q} />
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                   <div className="mx-auto bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                   </div>
                   <h3 className="text-slate-900 font-medium">No questions found</h3>
                   <p className="text-slate-500 text-sm mt-1">Try adjusting your category or search terms.</p>
                </div>
              )}
           </div>
        </div>
      </main>
    </div>
  );
}

export default App;