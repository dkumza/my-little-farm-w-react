export const Farm = ({ sheep, cow }) => {
   return (
      <div className="w-full flex items-center justify-center mt-4">
         <div className="sheep w-full p-4 flex flex-col items-center">
            <h1 className="mb-2">Sheep</h1>
            <div className="sheep-wrap border w-full p-4"></div>
         </div>
         <div className="cows w-full p-4 flex flex-col items-center justify-between">
            <h1 className="mb-2">Cows</h1>
            <div className="sheep-wrap border w-full p-4"></div>
         </div>
      </div>
   );
};
