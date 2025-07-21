//- components/show-more.tsx

"use client";

import React, { useState } from 'react';

interface ShowMoreProps {
  text: string;
  maxLength: number;
}

const ShowMore = ({ text, maxLength }: ShowMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText = text.slice(0, maxLength) + '...';
  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      {isExpanded ? text : truncatedText}
      &nbsp;
      {text.length > maxLength && (
        <a onClick={toggleShowMore} className='
        inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset
        hover:ring-red-600/50
        '>
          {isExpanded ? 'show less' : 'show more'}
        </a>
      )}
    </>
  );
}

export default ShowMore;
