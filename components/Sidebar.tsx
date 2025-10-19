
import React from 'react';
import type { Chapter } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  activeChapterId: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ chapters, activeChapterId }) => {
  return (
    <nav className="p-4 bg-white dark:bg-slate-800/50 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tartalomjegyzék</h2>
      <ul className="space-y-2">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeChapterId === chapter.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {chapter.title}
            </a>
          </li>
        ))}
        <li>
            <a
              href="#checklist"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeChapterId === 'checklist'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Ellenőrzőlista
            </a>
        </li>
      </ul>
    </nav>
  );
};
