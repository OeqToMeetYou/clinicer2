'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Bizimle iletişime geçin</h3>
              <p className="text-sm text-gray-500">Genellikle dakikalar içerisinde geri dönüş yaparız.</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 h-[400px] flex items-center justify-center text-gray-500">
            Yakında...
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center gap-2 group"
      >
        <MessageCircle className="h-6 w-6" />
        <span className={`${isOpen ? 'w-0 opacity-0' : 'w-auto opacity-100'} overflow-hidden transition-all duration-300 whitespace-nowrap group-hover:w-auto group-hover:opacity-100`}>
          Bizimle iletişime geçin
        </span>
      </button>
    </div>
  );
}