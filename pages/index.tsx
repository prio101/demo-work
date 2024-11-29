import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    const emailInput = document.querySelector("input[type='email']");
    if (emailInput) {
      (emailInput as HTMLInputElement).value = "";
    }
    setShowModal(showModal => !showModal);
  }


  const gradients = [
    "from-blue-500 to-purple-600",
    "from-green-400 to-blue-500",
    "from-pink-500 to-yellow-500",
    "from-red-500 to-orange-500",
  ];

  useEffect(() => {
    let currentGradient = 0;
    const interval = setInterval(() => {
      currentGradient = (currentGradient + 1) % gradients.length;
      const gradientElement = document.querySelector(".gradient-bg") as HTMLElement;
      if (gradientElement) {
      gradientElement.style.transition = "background 1s ease-in-out";
      gradientElement.className = `flex flex-1 flex-col w-full bg-gradient-to-r ${gradients[currentGradient]} gradient-bg`;
      }
    }, 5000);

    return () => clearInterval(interval);

  }, [gradients]);

  return (
    <div className="flex flex-1 flex-row w-full gradient-bg">
      <div className="flex flex-1 flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-6xl font-bold m-2">WhiteKite</h2>
      <h1 className="text-4xl font-bold mt-4">Coming Soon</h1>
      <p className="text-lg mt-2">We are working hard to bring you something amazing. Stay tuned!</p>
      <div className="mt-6">
        <input
        type="email"
        placeholder="Enter your email"
        className="text-black px-4 py-2 border rounded-md"
        />
        <button onClick={handleClick} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Notify Me
        </button>
      </div>
      </div>

      {showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
        <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-black text-2xl font-bold mb-4">Thank you!</h2>
        <p className="mb-4 text-black">You will be notified once we launch.</p>
        <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Close
        </button>
        </div>
      </div>
      )}
    </div>
  );
}
