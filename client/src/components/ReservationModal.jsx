import React from "react";

const ReservationModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="relative w-[900px] h-fit max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between text-white py-4 px-5 bg-blue-600 rounded-t-lg">
          <h2 className="font-bold text-2xl">COMPLETE RESERVATION</h2>
          <button onClick={onClose} className="text-white font-bold hover:text-gray-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 max-h-[500px] overflow-y-auto">
          <h1 className="px-5 mb-3 font-bold text-lg">Location & Date</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
