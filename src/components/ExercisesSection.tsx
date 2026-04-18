import { useState } from 'react';
import { MarkdownRenderer } from './MarkdownRenderer';
import { cn } from '../lib/utils';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Exercise {
  title: string;
  statement: string;
  solution: string;
}

interface ExercisesSectionProps {
  exercises: Exercise[];
}

export function ExercisesSection({ exercises }: ExercisesSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-4 mb-4">
        <h2 className="text-3xl font-semibold tracking-tight">Ejercicios</h2>
        <span className="text-[11px] font-medium tracking-widest uppercase text-ink-3">
          {exercises.length} con desarrollo
        </span>
      </div>

      <div className="border-t border-rule mt-2">
        {exercises.map((ex, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className="border-b border-rule group/ex">
              <button 
                onClick={() => toggle(idx)}
                className="w-full text-left py-6 flex items-start gap-4 sm:gap-6 group-hover/ex:opacity-80 transition-opacity"
              >
                <div className="font-sans text-xl font-semibold tracking-tight text-ink-3 pt-0.5 w-8 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                  <div className="font-semibold text-[15px]">{ex.title}</div>
                  <div className="text-[14px] text-ink-2 leading-relaxed">
                    <MarkdownRenderer content={ex.statement} />
                  </div>
                </div>
                <div className={cn(
                  "p-1 text-ink-3 transition-transform duration-300",
                  isOpen ? "rotate-45 text-ink" : ""
                )}>
                  <Plus className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-12 sm:pl-[68px] pb-8 pt-4 border-t border-rule-2">
                      <div className="text-[10px] font-semibold tracking-widest uppercase text-ink-3 mb-4">
                        Desarrollo
                      </div>
                      <div className="text-[15px] leading-relaxed">
                        <MarkdownRenderer content={ex.solution} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
