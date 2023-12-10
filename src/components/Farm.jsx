/* eslint-disable react/prop-types */
export const Farm = ({ sheep, setSheep, cow, setCow }) => {
   if (sheep === null) return;

   const handleSheep = (animal) => {
      const newArray = sheep.filter((s) => s.code !== animal.code);
      setSheep(newArray);
      localStorage.setItem("sheep", JSON.stringify(newArray));
      const prevCows = [...cow, animal];
      setCow(prevCows);
      localStorage.setItem("cow", JSON.stringify(prevCows));
   };

   const handleCows = (animal) => {
      const newArray = cow.filter((c) => c.code !== animal.code);
      setCow(newArray);
      localStorage.setItem("cow", JSON.stringify(newArray));
      const prevSheep = [...sheep, animal];
      setSheep(prevSheep);
      localStorage.setItem("sheep", JSON.stringify(prevSheep));
   };

   return (
      <div className="w-full flex">
         <div className="sheep w-full p-4 flex flex-col items-center">
            <h1 className="mb-2">Sheep</h1>
            <div className="sheep-wrap w-full p-4">
               <div className="flex flex-wrap gap-2 justify-center items-center">
                  {sheep &&
                     sheep.map((animal) => (
                        <div key={animal.code}>
                           {
                              <button
                                 onClick={() => handleSheep(animal)}
                                 className={`px-3 py-1 h-14 w-14 flex justify-center items-center hover:cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l ${
                                    animal.animal === "cow"
                                       ? " rounded-full from-yellow-200 to-red-200"
                                       : "from-blue-200 to-green-200 rounded-xl"
                                 }`}
                              >
                                 <div>{animal.animal}</div>
                              </button>
                           }
                        </div>
                     ))}
               </div>
            </div>
         </div>
         <div className="cows w-full p-4 flex flex-col items-center">
            <h1 className="mb-2">Cows</h1>
            <div className="sheep-wrap w-full p-4">
               <div className="flex flex-wrap gap-2 justify-center items-center">
                  {cow &&
                     cow.map((animal) => (
                        <div key={animal.code}>
                           {
                              <button
                                 onClick={() => handleCows(animal)}
                                 className={`px-3 py-1 h-14 w-14 flex justify-center items-center  hover:cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l ${
                                    animal.animal === "cow"
                                       ? " rounded-full from-yellow-200 to-red-200"
                                       : "from-blue-200 to-green-200 rounded-xl"
                                 }`}
                              >
                                 <div>{animal.animal}</div>
                              </button>
                           }
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};
