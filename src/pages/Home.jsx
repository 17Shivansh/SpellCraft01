import React from 'react';

const Home = () => {
  return (
    <div>
    <div className="bg-[#E0F7FA] h-auto lg:h-[500px] flex flex-col lg:flex-row justify-evenly items-center">
      <div className='text-center flex flex-col justify-center items-center lg:w-1/2'>
        <h1 className="text-4xl lg:text-6xl font-black text-red-500 mb-4">SpellCraft Olympiad</h1>
        <p className="text-lg lg:text-2xl font-medium text-goldenrod mb-4">
          Crafting Language, Conjuring Brilliance!
        </p>
      </div>
      <div className="flex items-center justify-center px-5 lg:w-1/2">
        <img
          src="src/assets/images/spell_final_cover__4___3_.pdf-removebg-preview (1).png"
          alt="SpellCraft Olympiad"
          className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-contain"
        />
      </div>
    </div>


    <div className="flex justify-center items-center h-64">
  <svg
    className="w-32 h-32 transform -rotate-90" // Flip the symbol horizontally
    viewBox="0 0 200 200"
    fill="none"
  >
    <path
      d="M50,0 L100,50 L150,0 L150,100 L100,150 L50,100 Z"
      stroke="black"
      strokeWidth="4"
    />
  </svg>
</div>



        
     



</div>
  );
};

export default Home;
