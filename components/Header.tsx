
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
        A jó prezentáció ismérvei
      </h1>
      <p className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6">
        Útmutató bátor előadóknak
      </p>
      <div className="max-w-3xl mx-auto bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100">Miért szuper dolog előadást tartani?</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Sokak számára ijesztőnek tűnhet kiállni mások elé, de egy prezentáció valójában egy fantasztikus lehetőség. Lehetőséget ad arra, hogy megmutasd, mi érdekel igazán, átadj a tudásodból másoknak, és bebizonyítsd, egy adott témában te vagy a szakértő. Ez a te színpadod, ahol megcsillogtathatod, amit tudsz. Készen állsz? Vágjunk is bele!
        </p>
      </div>
    </header>
  );
};
