
import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ChapterContent } from './components/ChapterContent';
import { InteractiveChecklist } from './components/InteractiveChecklist';
import { chapters, checklist } from './constants';
import type { Chapter } from './types';

const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<string>(chapters[0].id);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleChapter = entries.find((entry) => entry.isIntersecting)?.target;
        if (visibleChapter) {
          setActiveChapter(visibleChapter.id);
        }
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const elements = document.querySelectorAll('.chapter-section');
    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      elements.forEach((el) => observer.current?.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          <aside className="md:w-1/4 lg:w-1/5 md:sticky md:top-8 md:self-start">
            <Sidebar chapters={chapters} activeChapterId={activeChapter} />
          </aside>

          <main className="w-full md:w-3/4 lg:w-4/5">
            <Header />
            <div className="space-y-16">
              {chapters.map((chapter: Chapter) => (
                <ChapterContent key={chapter.id} chapter={chapter} />
              ))}
              <InteractiveChecklist checklistData={checklist} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
