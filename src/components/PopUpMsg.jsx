import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root");

const PopUpMsg = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="flex flex-col h-[400px] max-w-[250px] mx-auto items-center justify-center mt-20 border border-neutral-200 shadow-lg bg-zinc-200 px-4 gap-4"
    >
      <h2 className="text-center">
        Hi 👋! Please bare with me as this site is still under construction
      </h2>
      <p className="text-center">
        Some buttons and forms may not work at the moment. Thank you for
        understanding 😄.
      </p>
      <button
        onClick={closeModal}
        className="border border-gray-500 hover:bg-gray-200 transition duration-150 ease-in-out px-8 py-3 rounded-2xl"
      >
        Close
      </button>
    </Modal>
  );
};

export default PopUpMsg;
