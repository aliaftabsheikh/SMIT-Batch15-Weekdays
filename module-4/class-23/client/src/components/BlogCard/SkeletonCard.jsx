import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md animate-pulse flex flex-col">
      <div className="mb-4 h-6 w-24 rounded-full bg-white/10"></div>
      <div className="mb-3 h-8 w-3/4 rounded bg-white/10"></div>
      <div className="mb-4 flex gap-4">
        <div className="h-4 w-20 rounded bg-white/10"></div>
        <div className="h-4 w-24 rounded bg-white/10"></div>
      </div>
      <div className="mb-2 h-4 w-full rounded bg-white/10"></div>
      <div className="mb-2 h-4 w-full rounded bg-white/10"></div>
      <div className="mb-6 h-4 w-2/3 rounded bg-white/10 flex-grow"></div>
      <div className="mt-auto border-t border-white/10 pt-4 flex justify-between">
        <div className="h-4 w-20 rounded bg-white/10"></div>
        <div className="h-4 w-24 rounded bg-white/10"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
