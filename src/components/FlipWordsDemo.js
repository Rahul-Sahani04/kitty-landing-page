import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  // Define the words to be flipped related to cats
  const words = [
    "cats",
    "kittens",
    "felines",
    "purrballs",
    "meowsters",
    "pawfriends",
  ];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4 ">
      <div className="text-4xl mx-auto font-normal text-neutral-600 text-center w-full transition-all duration-300 ease-in-out">
        {/* Write a line and add the FlipWords component */}
        Life is better with
        <FlipWords words={words} /> <br />
        Embrace the purrfection!
      </div>
    </div>
  );
}
