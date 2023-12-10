import { useState, useEffect } from "react";

import "./App.css";
import { AddButton } from "./components/AddButton";
import { Farm } from "./components/Farm";

function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function App() {
   const [sheep, setSheep] = useState(
      JSON.parse(localStorage.getItem("sheep")) || null
   );
   const [cow, setCow] = useState(
      JSON.parse(localStorage.getItem("cow")) || null
   );

   const makeRandomID = (length) => {
      let newID = [];
      for (let i = 0; i < length; i++) {
         newID.push(Math.floor(Math.random() * 9));
      }
      return newID.join("");
   };

   const addAnimal = (animal) => {
      let newArray = [];
      for (let i = 0; i < rand(5, 20); i++) {
         newArray.push({
            animal,
            code:
               animal === "sheep"
                  ? `S${makeRandomID(7)}`
                  : `C${makeRandomID(7)}`,
         });
      }
      localStorage.setItem(animal, JSON.stringify(newArray));
      if (animal === "sheep") setSheep(newArray);
      if (animal === "cow") setCow(newArray);
   };

   return (
      <div className="container mx-auto my-12 p-4  md:w-4/6 flex flex-col justify-center items-center">
         <AddButton
            addSheep={() => {
               addAnimal("sheep");
               addAnimal("cow");
            }}
            addBtnText="To Farm"
            color="bg-gradient-to-r from-cyan-500 to-blue-500" // for add
            // color="bg-gradient-to-br from-green-400 to-blue-600" // for edit
            // color="bg-gradient-to-br from-pink-500 to-orange-400" // for delete
         />
         <Farm sheep={sheep} setSheep={setSheep} cow={cow} setCow={setCow} />
      </div>
   );
}

export default App;
