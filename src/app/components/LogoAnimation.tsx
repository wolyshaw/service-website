'use client';

export default function LogoAnimation() {
  return (
    <div className="w-48 h-48 mb-16 relative">
      <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-[spin_3s_linear_infinite]"></div>
      <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-[spin_3s_linear_infinite_reverse]"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
        <span>CRE</span>
        <span className="block mt-1">COHE</span>
      </div>
    </div>
  );
}