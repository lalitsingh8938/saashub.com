import React from "react";

function Compare() {
  return (
    <div className="flex justify-center items-center mt-10 px-4">
      <div className="bg-slate-100 border p-4 rounded-lg w-full max-w-6xl h-auto">
        <p className="text-slate-700 text-center font-extrabold text-lg mb-2">Compare Software</p>
        <div className="flex flex-wrap gap-6 justify-center opacity-70 text-sm md:text-base">
          {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
            <p key={letter} className="p-1">
              {letter}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Compare;
