import React from 'react';
import CategoryForm from './CategoryForm';

const Modal = ({ visible, setVisible, updateName, setUpdatedName, handleUpdate }) => {
  if (!visible) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-1/2">
        <div className="flex justify-end p-2">
          <button
            className="text-gray-400 hover:text-gray-500"
            onClick={() => setVisible(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <CategoryForm
            value={updateName}
            setValue={setUpdatedName}
            handleSubmit={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
