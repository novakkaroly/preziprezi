
import React, { useState, useEffect } from 'react';
import type { ChecklistCategory } from '../types';

interface ChecklistProps {
  checklistData: ChecklistCategory[];
}

export const InteractiveChecklist: React.FC<ChecklistProps> = ({ checklistData }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const storedItems = localStorage.getItem('checklistItems');
      if (storedItems) {
        setCheckedItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error("Failed to load checklist state from localStorage", error);
    }
  }, []);

  const handleCheckboxChange = (item: string) => {
    const newCheckedItems = { ...checkedItems, [item]: !checkedItems[item] };
    setCheckedItems(newCheckedItems);
    try {
      localStorage.setItem('checklistItems', JSON.stringify(newCheckedItems));
    } catch (error) {
      console.error("Failed to save checklist state to localStorage", error);
    }
  };
  
  const totalItems = checklistData.reduce((acc, category) => acc + category.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

  return (
    <section id="checklist" className="chapter-section pt-4 -mt-4">
        <div className="relative mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">A Te Személyes Ellenőrzőlistád</h2>
            <span className="absolute -top-2 -left-4 text-6xl font-extrabold text-slate-200 dark:text-slate-700 -z-10">Összegzés</span>
        </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Haladás</span>
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{`${checkedCount} / ${totalItems}`}</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {checklistData.map((category) => (
            <div key={category.title}>
                <h3 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-100">{category.title}</h3>
                <ul className="space-y-2">
                {category.items.map((item) => (
                    <li key={item} className="flex items-center">
                    <label className="flex items-center cursor-pointer text-slate-600 dark:text-slate-300">
                        <input
                        type="checkbox"
                        checked={!!checkedItems[item]}
                        onChange={() => handleCheckboxChange(item)}
                        className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-3"
                        />
                        <span className={`${checkedItems[item] ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                        {item}
                        </span>
                    </label>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};
