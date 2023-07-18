import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root");

const PopUpMsg = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="flex flex-col h-[400px] max-w-[250px] mx-auto items-center justify-center mt-20 border border-neutral-200 shadow-lg bg-slate-300 px-4 gap-4"
    >
      <h1 className="text-center text-2xl font-semibold">Hi 👋!</h1>
      <h2 className="text-center text-lg tracking-widest ">
        Please bare with me as this site is still under construction
      </h2>
      <p className="text-center tracking-widest text-lg">
        Some buttons and forms may not work. Thank you for understanding 😄.
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
