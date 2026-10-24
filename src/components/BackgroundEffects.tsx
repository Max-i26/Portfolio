import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Film Grain */}
      <div className="film-grain" />

      {/* Moonstone Orbs */}
      <div className="fixed -top-[100px] -right-[100px] w-[560px] h-[560px] rounded-full pointer-events-none z-[1] bg-[radial-gradient(circle,rgba(224,231,255,0.06)_0%,transparent_70%)]" />
      <div className="fixed -bottom-[100px] -left-[100px] w-[440px] h-[440px] rounded-full pointer-events-none z-[1] bg-[radial-gradient(circle,rgba(224,231,255,0.04)_0%,transparent_70%)]" />
    </>
  );
};

export default BackgroundEffects;
