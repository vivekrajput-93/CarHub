import React from "react";

const ReservationModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="absolute w-[900px] h-fit max-w-7xl top-[50px] bg-white rounded-lg shadow-lg overflow-scroll">
        <div className="flex justify-between text-white py-4 px-5 bg-blue-600">
          <h2 className="font-bold text-2xl">COMPLETE RESERVATION</h2>
          <button
            onClick={onClose}
            className="text-white font-bold hover:text-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="border py-8 px-8 flex flex-col gap-8 bg-blue-600 bg-opacity-30">
          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-blue-600"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-2xl font-bold text-blue-600">
              Upon completing this reservation enquiry, you will receive:
            </span>
          </div>
          <p className="text-lg font-semibold text-custom-gray">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <div className="p-6 max-h-[500px] overflow-y-auto">
          <h1 className="px-5 mb-3 font-bold text-lg">Location & Date</h1>
          {children}
        </div>
        <div className="flex justify-between text-white py-4 px-5 bg-blue-600">
          <h2 className="font-bold text-2xl">COMPLETE RESERVATION</h2>
          <button
            onClick={onClose}
            className="text-white font-bold hover:text-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="border py-8 px-8 flex flex-col gap-8 bg-blue-600 bg-opacity-30">
          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-blue-600"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-2xl font-bold text-blue-600">
              Upon completing this reservation enquiry, you will receive:
            </span>
          </div>
          <p className="text-lg font-semibold text-custom-gray">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
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
