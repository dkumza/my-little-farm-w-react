/* eslint-disable react/prop-types */
export const Farm = ({ sheep, cow }) => {
   if (sheep === null) return;
   return (
      <div className="w-full flex">
         <div className="sheep w-full p-4 flex flex-col items-center">
            <h1 className="mb-2">Sheep</h1>
            <div className="sheep-wrap w-full p-4">
               <div className="flex flex-wrap gap-2 justify-center items-center">
                  {sheep &&
                     sheep.map((animal, index) => (
                        <button
                           className=" px-3 py-1 h-14 w-14 flex justify-center items-center hover:cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l from-gray-300 to-cyan-200"
                           key={index}
                        >
                           <div>{animal.animal}</div>
                        </button>
                     ))}
               </div>
            </div>
         </div>
         <div className="cows w-full p-4 flex flex-col items-center">
            <h1 className="mb-2">Cows</h1>
            <div className="sheep-wrap w-full p-4">
               <div className="flex flex-wrap gap-2 justify-center items-center">
                  {cow &&
                     cow.map((animal, index) => (
                        <button
                           className=" px-3 py-1 h-14 w-14 flex justify-center items-center rounded-full hover:cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l from-yellow-200 to-red-200"
                           key={index}
                        >
                           <div>{animal.animal}</div>
                        </button>
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};
