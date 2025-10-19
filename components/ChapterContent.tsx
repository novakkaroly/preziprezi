
import React from 'react';
import type { Chapter, ContentItem, Tip, Mistake } from '../types';
import { Icons } from './Icons';

const TipCard: React.FC<{ item: Tip }> = ({ item }) => {
    const Icon = Icons[item.icon];
    return (
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 h-full">
            <div className="flex items-center mb-2">
                <Icon className="h-6 w-6 mr-3 text-indigo-500" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">{item.title}</h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
        </div>
    );
};

const MistakesComparator: React.FC<{ items: Mistake[] }> = ({ items }) => (
    <div className="space-y-6">
        {items.map((item, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-4 items-start bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="border-r-0 md:border-r border-slate-200 dark:border-slate-700 md:pr-4">
                    <div className="flex items-center mb-2 text-red-500">
                        <Icons.thumbsDown className="h-5 w-5 mr-2" />
                        <h4 className="font-bold text-red-600 dark:text-red-400">{item.badTitle}</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.badReason}</p>
                </div>
                <div>
                    <div className="flex items-center mb-2 text-green-500">
                        <Icons.thumbsUp className="h-5 w-5 mr-2" />
                        <h4 className="font-bold text-green-600 dark:text-green-400">{item.goodTitle}</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.goodReason}</p>
                </div>
            </div>
        ))}
    </div>
);

const ContentRenderer: React.FC<{ item: ContentItem }> = ({ item }) => {
  switch (item.type) {
    case 'paragraph':
      return <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{item.text}</p>;
    case 'list':
      return (
        <ul className="space-y-2 list-disc list-inside mb-4 text-slate-600 dark:text-slate-300">
          {item.items.map((li, index) => <li key={index}>{li}</li>)}
        </ul>
      );
    case 'quote':
        return (
            <blockquote className="my-6 p-4 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200 italic rounded-r-lg">
                <p>"{item.text}"</p>
                {item.author && <cite className="block mt-2 text-sm not-italic">- {item.author}</cite>}
            </blockquote>
        );
    case 'tips':
        return (
            <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {item.items.map((tip, index) => <TipCard key={index} item={tip} />)}
            </div>
        );
    case 'mistakesTable':
        return <MistakesComparator items={item.items} />;
    default:
      return null;
  }
};

export const ChapterContent: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  return (
    <section id={chapter.id} className="chapter-section pt-4 -mt-4">
      <div className="relative mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{chapter.subtitle}</h2>
        <span className="absolute -top-2 -left-4 text-6xl font-extrabold text-slate-200 dark:text-slate-700 -z-10">{chapter.title}</span>
      </div>
      
      {chapter.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 border-b-2 border-indigo-200 dark:border-indigo-800 pb-2">{section.title}</h3>
          {section.content.map((contentItem, contentIndex) => (
            <ContentRenderer key={contentIndex} item={contentItem} />
          ))}
        </div>
      ))}
    </section>
  );
};
