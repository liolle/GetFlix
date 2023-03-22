import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function RatingSystem(): JSX.Element {
  const [rating, setRating] = useState<number>(3); // Set initial rating to 3 out of 5

  const handleRatingClick = (newRating: number): void => {
    setRating(newRating);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index: number) => (
          <button
            key={index}
            onClick={() => handleRatingClick(index + 1)}
            className={`${
              index < rating ? "text-yellow-500" : "text-gray-300"
            } text-2xl focus:outline-none`}
          >
            ★
          </button>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <FaFacebook className="text-3xl text-blue-500 hover:text-blue-700 cursor-pointer" />
        <FaTwitter className="text-3xl text-blue-400 hover:text-blue-600 cursor-pointer" />
        <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700 cursor-pointer" />
      </div>
    </div>
  );
}
export  default RatingSystem