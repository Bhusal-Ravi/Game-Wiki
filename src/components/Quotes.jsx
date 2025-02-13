import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

function Quotes({ quotes }) {
  const [index, setIndex] = useState(0);

  function changeQuote() {
    let length = quotes.quotes.length;
    let newIndex;
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * length);
    }
    setIndex(newIndex);
  }

  useEffect(() => {
    if (!quotes?.quotes[index]?.body || !quotes?.quotes[index]?.author || !quotes?.quotes[index]?.tags[0]) {
      changeQuote();
    }
  }, [index, quotes]);

  return (
    <div className="max-w-2xl w-full mx-auto mt-30  ">
      <div className="relative bg-background/80  p-12 rounded-lg border-l-4 border-red-600 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <Quote className="absolute text-red-600 opacity-10 h-32 w-32 -top-6 -left-6" />

        <div className="relative z-10">
          <p className="text-lg md:text-xl font-serif italic text-gray-100 mb-6 leading-relaxed">
            "{quotes?.quotes[index]?.body || "Loading Quote.."}"
          </p>

          <div className="flex flex-col mb-6">
            <span className="text-xl text-red-500 font-bold">
              {quotes?.quotes[index]?.author || "Loading Author.."}
            </span>
            <span className="text-sm text-gray-400">
              {quotes?.quotes[index]?.tags[0] ? `Genre: ${quotes?.quotes[index]?.tags[0]?.toUpperCase()}` : "Wishing You A WonderFul Day"}
            </span>
          </div>

          <button
            onClick={changeQuote}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Next Quote
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 opacity-50" />
      </div>
    </div>
  );
}

export default Quotes;
