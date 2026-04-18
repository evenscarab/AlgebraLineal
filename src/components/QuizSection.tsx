import { useState, useEffect } from 'react';
import { MarkdownRenderer } from './MarkdownRenderer';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizSectionProps {
  classId: number;
  questions: Question[];
}

export function QuizSection({ classId, questions }: QuizSectionProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  // Load saved answers
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`al_quiz_${classId}`);
      if (saved) {
        setAnswers(JSON.parse(saved));
      } else {
        setAnswers({});
      }
    } catch (e) {
      // Ignored
    }
  }, [classId]);

  const handleAnswer = (qIndex: number, optIndex: number) => {
    if (answers[qIndex] !== undefined) return; // already answered
    const newAnswers = { ...answers, [qIndex]: optIndex };
    setAnswers(newAnswers);
    localStorage.setItem(`al_quiz_${classId}`, JSON.stringify(newAnswers));
  };

  const handleRetry = () => {
    setAnswers({});
    localStorage.removeItem(`al_quiz_${classId}`);
  };

  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;
  const score = Object.entries(answers).filter(([qIdx, aIdx]) => questions[parseInt(qIdx)].correct === aIdx).length;
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-baseline gap-4 mb-4">
        <h2 className="text-3xl font-semibold tracking-tight">Cuestionario</h2>
        <span className="text-[11px] font-medium tracking-widest uppercase text-ink-3">
          {questions.length} preguntas
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {questions.map((q, qIndex) => {
          const answered = answers[qIndex] !== undefined;
          const selectedOption = answers[qIndex];
          const isCorrectResponse = selectedOption === q.correct;

          return (
            <div key={qIndex} className="bg-white border border-rule rounded-[6px] overflow-hidden shadow-sm">
              <div className="p-6 pb-4">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-ink-3 mb-2">
                  Pregunta {qIndex + 1}
                </div>
                <div className="text-[17px] leading-relaxed text-ink">
                  <MarkdownRenderer content={q.question} />
                </div>
              </div>

              <div className="border-t border-rule-2">
                {q.options.map((opt, optIndex) => {
                  const isSelected = selectedOption === optIndex;
                  const isCorrectOption = q.correct === optIndex;
                  
                  let optionClass = "hover:bg-canvas transition-colors cursor-pointer text-[15px]";
                  let letterClass = "border-rule text-ink-3 group-hover:border-ink-2";

                  if (answered) {
                    optionClass = "cursor-default";
                    if (isCorrectOption) {
                      optionClass = "bg-[#EAF4EE] text-[#2D6A4F] font-medium";
                      letterClass = "bg-[#2D6A4F] border-[#2D6A4F] text-white";
                    } else if (isSelected && !isCorrectOption) {
                      optionClass = "bg-[#FAECEE] text-[#9B2335]";
                      letterClass = "bg-[#9B2335] border-[#9B2335] text-white";
                    } else {
                      optionClass = "opacity-50";
                    }
                  } else if (isSelected) {
                    optionClass = "bg-[#F0EDF8] text-[#4A3A8C]";
                    letterClass = "border-[#4A3A8C] text-[#4A3A8C]";
                  }

                  return (
                    <div 
                      key={optIndex}
                      onClick={() => handleAnswer(qIndex, optIndex)}
                      className={cn(
                        "flex items-start gap-4 p-4 border-b border-rule-2 last:border-b-0 group",
                        optionClass
                      )}
                    >
                      <div className={cn(
                        "w-6 h-6 shrink-0 rounded flex items-center justify-center border text-xs font-semibold mt-0.5 transition-colors",
                        letterClass
                      )}>
                        {String.fromCharCode(65 + optIndex)}
                      </div>
                      <div className="pt-0.5">
                        <MarkdownRenderer content={opt} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <AnimatePresence>
                {answered && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className={cn(
                      "px-6 py-4 border-t border-rule-2 text-[14px] leading-relaxed",
                      isCorrectResponse ? "bg-[#EAF4EE] text-[#2D6A4F]" : "bg-[#FAECEE] text-[#9B2335]"
                    )}
                  >
                    <div className="font-semibold text-[11px] tracking-widest uppercase mb-1">
                      {isCorrectResponse ? 'Correcto' : 'Incorrecto'}
                    </div>
                    <div className={cn("text-[14px]", isCorrectResponse ? "text-[#2D6A4F]/80" : "text-[#9B2335]/80")}>
                      <MarkdownRenderer content={q.explanation} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {allAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white border border-rule rounded-[6px] p-6 sm:p-8 flex items-center gap-6 shadow-sm flex-wrap"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-sans text-5xl font-semibold tracking-tight text-ink">{score}</span>
              <span className="text-3xl text-ink-3">/{questions.length}</span>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <div className="font-semibold text-[16px] text-ink">{percentage}% de aciertos</div>
              <div className="text-[14px] text-ink-2 mt-1">
                {percentage === 100 
                  ? 'Dominas todos los conceptos de esta clase.'
                  : percentage >= 60 
                  ? 'Buen resultado. Revisa las preguntas incorrectas.' 
                  : 'Repasa los apuntes e intenta de nuevo.'}
              </div>
            </div>

            <button 
              onClick={handleRetry}
              className="px-5 py-2 border border-rule rounded-full text-[13px] font-medium text-ink-2 hover:border-ink-2 hover:text-ink transition-colors whitespace-nowrap"
            >
              Reintentar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
