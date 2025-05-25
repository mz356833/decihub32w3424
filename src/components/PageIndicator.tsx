import React from 'react';

interface PageIndicatorProps {
  current: number;
  total: number;
}

const PageIndicator = ({ current, total }: PageIndicatorProps) => {
  return (
    <div className="absolute top-4 right-4 bg-yellow-400 text-pink-600 px-3 py-1 rounded-full font-bold z-30 shadow-md">
      {current}/{total}
    </div>
  );
};

export default PageIndicator;
