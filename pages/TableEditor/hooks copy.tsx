import React, { useState } from 'react';

// Import the Tailwind CSS styles
import './tailwind.css';

// TypeScript type for the modal state
type ModalState = {
  modalOpen: boolean;
};

function MyModal() {
  // Use the useState hook to manage the state of the modal
  // The type of the state is specified using the ModalState type
  const [modalOpen, setModalOpen] = useState<ModalState>({ modalOpen: false });

  // Event handler for the click event
  const handleClick = () => {
    // Open the modal by setting the modalOpen state to true
    setModalOpen({ modalOpen: true });
  }

  return (
    <div>
      {/* Button that opens the modal when clicked */}
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>

      {/* Modal that appears when the modalOpen state is true */}
      {modalOpen.modalOpen && (
        <div className="modal bg-white rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Enter your ID</h1>
          <input type="text" className="border rounded p-2" />
        </div>
      )}
    </div>
  );
}
