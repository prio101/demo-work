import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState('');
  const [noticeType, setNoticeType] = useState('success');

  const handleClick = () => {
    const emailInput = document.querySelector("input[type='email']");
    if (emailInput) {
      const emailValue = (emailInput as HTMLInputElement).value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValue || !emailPattern.test(emailValue)) {
        setData("Please enter a valid email address.");
        setNoticeType('error');
        setShowModal(showModal => !showModal);
      }
      else{
        (emailInput as HTMLInputElement).value = "";
        setShowModal(showModal => !showModal);
        setNoticeType('success');
        setData('You will be notified once we launch.')
      }
    }



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
      <p className="text-lg mt-2 text-center">We are working hard to bring you something amazing. Stay tuned!</p>
      <div className="mt-6 flex flex-col md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-10 text-black px-4 py-2 border rounded-md"
        />
        <button onClick={handleClick}
                className="h-10 mt-2 md:mt-0 md:ml-2 px-4 py-2
                           text-white rounded-md
                           bg-transparent
                           border border-1">
          Notify Me
        </button>
      </div>
      </div>

      {showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
        <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-black text-2xl font-bold mb-4">{noticeType == 'error' ? 'Please Fix your Email' : 'Thank You' }</h2>
        <p className="mb-4 text-black">{data}</p>
        <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Close
        </button>
        </div>
      </div>
      )}
    </div>
  );
}
