/* eslint-disable react/prop-types */
export const AddButton = ({ addSheep, addBtnText, color }) => {
   return (
      <div>
         <button
            onClick={addSheep}
            type="button"
            className={`${color} text-white hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-semibold rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2 `}
         >
            {addBtnText}
         </button>
      </div>
   );
};
