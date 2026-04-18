import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { courseData } from './data';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { cn } from './lib/utils';
import { QuizSection } from './components/QuizSection';
import { ExercisesSection } from './components/ExercisesSection';

type ViewMode = 'home' | 'class';
type FilterMode = 'ALL' | 'I1' | 'I2' | 'I3';

export default function App() {
  const [view, setView] = useState<ViewMode>('home');
  const [activeClassId, setActiveClassId] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterMode>('ALL');

  const { course, classes } = courseData;

  const totalClasses = classes.length;
  const totalQuestions = classes.reduce((sum, cl) => sum + (cl.quiz?.length || 0), 0);
  const totalExercises = classes.reduce((sum, cl) => sum + (cl.exercises?.length || 0), 0);

  const activeClass = classes.find(c => c.id === activeClassId);

  // Determine indexes for next/prev (based on full sorted list, not filtered)
  const currentIndex = activeClassId ? classes.findIndex(c => c.id === activeClassId) : -1;
  const prevClass = currentIndex > 0 ? classes[currentIndex - 1] : null;
  const nextClass = currentIndex !== -1 && currentIndex < classes.length - 1 ? classes[currentIndex + 1] : null;

  // Handle hash routing to support native back button and URL sharing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#class-')) {
        const id = parseInt(hash.replace('#class-', ''), 10);
        if (!isNaN(id)) {
          setActiveClassId(id);
          setView('class');
        }
      } else {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = ''; // Return home (triggers view update via hashchange)
    setTimeout(() => {
      if (activeClassId) {
        document.getElementById(`class-row-${activeClassId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  // Automatically scroll to top ONLY when entering a class
  useEffect(() => {
    if (view === 'class') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [view, activeClassId]);

  const filteredClasses = classes.filter(cls => {
    if (filter === 'I1') return cls.id >= 1 && cls.id <= 14;
    if (filter === 'I2') return cls.id >= 15 && cls.id <= 24;
    if (filter === 'I3') return cls.id >= 25;
    return true; // ALL
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-rule">
        <div className="max-w-[1160px] mx-auto px-6 h-14 flex items-center justify-between">
          <button 
            onClick={navigateToHome}
            className="flex items-center gap-3 group"
          >
            <span className="font-semibold text-base sm:text-lg hover:text-ink-2 transition-colors">
              {course.title}
            </span>
            <span className="px-3 py-1 border border-rule rounded-full text-[11px] font-medium tracking-widest uppercase text-ink-3">
              {course.code}
            </span>
          </button>

          {view === 'class' && (
            <button 
              onClick={navigateToHome}
              className="flex items-center gap-1.5 text-[13px] font-medium text-ink-2 border border-rule rounded-full px-4 py-1.5 hover:border-ink-2 hover:text-ink transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1">
        <AnimatePresence mode="popLayout">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <div className="max-w-[1160px] mx-auto px-6 pt-20 pb-16 border-b border-rule">
                <div className="text-[11px] font-medium tracking-widest uppercase text-ink-3 mb-6">
                  {course.subtitle}
                </div>
                <h1 className="text-4xl sm:text-7xl lg:text-[96px] font-bold tracking-tight mb-8 leading-[0.95]">
                  Álgebra<br />
                  <span className="text-ink-2 font-medium">Lineal</span>
                </h1>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 sm:gap-6 mt-8">
                  <p className="text-[14px] sm:text-[15px] text-ink-2 max-w-[420px] leading-relaxed">
                    Apuntes, cuestionarios y ejercicios resueltos organizados por clase. Material interactivo para dominar los conceptos.
                  </p>
                  
                  <div className="flex gap-8 sm:gap-10">
                    <div className="flex flex-col gap-1">
                      <div className="text-3xl sm:text-4xl font-semibold leading-none">{totalClasses}</div>
                      <div className="text-[11px] font-medium tracking-widest uppercase text-ink-3">Clases</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-3xl sm:text-4xl font-semibold leading-none">{totalQuestions}</div>
                      <div className="text-[11px] font-medium tracking-widest uppercase text-ink-3">Preguntas</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-3xl sm:text-4xl font-semibold leading-none">{totalExercises}</div>
                      <div className="text-[11px] font-medium tracking-widest uppercase text-ink-3">Ejercicios</div>
                    </div>
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mt-12 mb-2">
                  {(['ALL', 'I1', 'I2', 'I3'] as FilterMode[]).map(f => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={cn(
                        "px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors border",
                        filter === f 
                          ? "bg-ink border-ink text-white" 
                          : "bg-transparent border-rule text-ink-2 hover:border-ink-2 hover:text-ink"
                      )}
                    >
                      {f === 'ALL' ? 'Examen (Todas)' : f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Class List */}
              <div className="max-w-[1160px] mx-auto px-6 pb-24 mt-4">
                {filteredClasses.map((cls) => {
                  const hasQuiz = cls.quiz && cls.quiz.length > 0;
                  const hasEx = cls.exercises && cls.exercises.length > 0;
                  return (
                    <div 
                      id={`class-row-${cls.id}`}
                      key={cls.id}
                      onClick={() => {
                        window.location.hash = `#class-${cls.id}`;
                      }}
                      className="group grid grid-cols-[60px_1fr_auto] sm:grid-cols-[90px_1fr_auto] gap-x-6 sm:gap-x-8 py-10 border-b border-rule cursor-pointer hover:bg-white/40 transition-colors -mx-6 px-6 sm:mx-0 sm:px-0"
                    >
                      <div className="text-4xl sm:text-5xl font-semibold text-rule group-hover:text-rule-2 transition-colors tabular-nums mt-1 whitespace-nowrap">
                        {cls.displayId?.includes('y') ? (
                          <div className="flex flex-col gap-1.5 leading-none -mt-1 tracking-tighter">
                            <div>
                              <span>{cls.displayId.split('y')[0].trim().padStart(2, '0')}</span>
                              <span className="opacity-60 ml-[1px]">/</span>
                            </div>
                            <span className="ml-[2px]">{cls.displayId.split('y')[1].trim().padStart(2, '0')}</span>
                          </div>
                        ) : (
                          cls.displayId || String(cls.id).padStart(2, '0')
                        )}
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        {(hasQuiz || hasEx) && (
                          <div className="flex flex-wrap items-center gap-3">
                            {hasQuiz && (
                              <span className="text-[10px] font-semibold tracking-widest uppercase text-ink-3 border border-rule rounded-full px-2.5 py-0.5">
                                {cls.quiz?.length} preguntas
                              </span>
                            )}
                            {hasEx && (
                              <span className="text-[10px] font-semibold tracking-widest uppercase text-ink-3 border border-rule rounded-full px-2.5 py-0.5">
                                {cls.exercises?.length} ejercicios
                              </span>
                            )}
                          </div>
                        )}
                        <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-ink group-hover:text-ink-2 transition-colors">
                          {cls.title}
                        </h2>
                        <div className="text-[13px] sm:text-sm text-ink-2 leading-relaxed max-w-[520px]">
                          <MarkdownRenderer content={cls.description} />
                        </div>
                      </div>

                      <div className="pt-2">
                        <ChevronRight className="w-6 h-6 text-ink-3 group-hover:text-ink group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {view === 'class' && activeClass && (
            <motion.div
              key="class"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="max-w-[880px] mx-auto px-6 pt-16 pb-32"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-ink-3 mb-4 sm:mb-5">
                  Clase {activeClass.displayId || String(activeClass.id).padStart(2, '0')}
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 sm:mb-5 !leading-tight">
                  {activeClass.title}
                </h1>
                <div className="text-[15px] sm:text-lg text-ink-2 mb-10 sm:mb-12 leading-relaxed max-w-2xl px-4">
                  <MarkdownRenderer content={activeClass.description} />
                </div>
              </div>

              {activeClass.content && (
                <MarkdownRenderer content={activeClass.content} />
              )}

              {activeClass.quiz && activeClass.quiz.length > 0 && (
                <>
                  <div className="h-px bg-rule my-14" />
                  <QuizSection classId={activeClass.id} questions={activeClass.quiz} />
                </>
              )}

              {activeClass.exercises && activeClass.exercises.length > 0 && (
                <>
                  <div className="h-px bg-rule my-14" />
                  <ExercisesSection exercises={activeClass.exercises} />
                </>
              )}

              {/* Next / Previous Navigation */}
              <div className="mt-16 pt-10 border-t border-rule flex flex-col sm:flex-row justify-between gap-6 sm:gap-4 items-center">
                {prevClass ? (
                  <button 
                    onClick={() => { window.location.hash = `#class-${prevClass.id}`; }}
                    className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[14px] font-medium text-ink-2 hover:text-ink transition-colors w-full sm:w-auto text-center sm:text-left p-2 sm:p-0"
                  >
                    <ArrowLeft className="w-5 h-5 mb-1 sm:mb-0" />
                    <span>CLASE {prevClass.displayId || String(prevClass.id).padStart(2, '0')}</span>
                  </button>
                ) : <div className="hidden sm:block sm:w-[120px]" />}
                
                <button 
                  onClick={navigateToHome}
                  className="px-6 py-2.5 rounded-full border border-rule text-[13px] font-medium text-ink-2 hover:text-ink hover:border-ink-2 transition-colors w-full sm:w-auto mt-4 sm:mt-0 order-first sm:order-none"
                >
                  Volver al temario
                </button>

                {nextClass ? (
                  <button 
                    onClick={() => { window.location.hash = `#class-${nextClass.id}`; }}
                    className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[14px] font-medium text-ink-2 hover:text-ink transition-colors w-full sm:w-auto text-center sm:text-right p-2 sm:p-0"
                  >
                    <span>CLASE {nextClass.displayId || String(nextClass.id).padStart(2, '0')}</span>
                    <ChevronRight className="w-5 h-5 mt-1 sm:mt-0" />
                  </button>
                ) : <div className="hidden sm:block sm:w-[120px]" />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-rule py-8 px-6 mt-auto">
        <div className="max-w-[1160px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-ink-3">
          <span>{course.title} · {course.subtitle}</span>
          <span>Desarrollado con React y KaTeX</span>
        </div>
      </footer>
    </div>
  );
}
